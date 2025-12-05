const http = require('http');

const data = JSON.stringify({
    name: 'Test User',
    email: `test${Math.floor(Math.random() * 10000)}@example.com`,
    password: 'password123'
});

const options = {
    hostname: 'localhost',
    port: 5000,
    path: '/api/register',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

req.write(data);
req.end();
