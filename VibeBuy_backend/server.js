const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
// [DATABASE_VM_IP_ADDRESS]: Replace 'localhost' with the actual IP of the Database VM
const mongoURI = process.env.MONGODB_URI || 'mongodb://100.81.244.102:27017/vibebuy';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

// Routes
app.post('/api/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validation
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Please enter all fields' });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters' });
        }

        // Check for existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        const savedUser = await newUser.save();

        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: savedUser._id,
                name: savedUser.name,
                email: savedUser.email
            }
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Login Endpoint
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check for user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        res.json({
            message: 'Login successful',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                mfaEnabled: user.mfaEnabled
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// MFA Setup Endpoint
const speakeasy = require('speakeasy');
const qrcode = require('qrcode');

app.post('/api/mfa/setup', async (req, res) => {
    try {
        const { userId } = req.body;
        const user = await User.findById(userId);

        if (!user) return res.status(404).json({ message: 'User not found' });

        // Generate secret
        const secret = speakeasy.generateSecret({
            name: `VibeBuy (${user.email})`
        });

        // Save secret to user (temporarily, until verified)
        user.mfaSecret = secret;
        await user.save();

        // Generate QR code
        qrcode.toDataURL(secret.otpauth_url, (err, data_url) => {
            if (err) throw err;
            res.json({ secret: secret.base32, qrCode: data_url });
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// MFA Verify Endpoint
app.post('/api/mfa/verify', async (req, res) => {
    try {
        const { userId, token } = req.body;
        const user = await User.findById(userId);

        if (!user) return res.status(404).json({ message: 'User not found' });

        const verified = speakeasy.totp.verify({
            secret: user.mfaSecret.base32,
            encoding: 'base32',
            token: token
        });

        if (verified) {
            user.mfaEnabled = true;
            await user.save();
            res.json({ verified: true, message: 'MFA Verified' });
        } else {
            res.status(400).json({ verified: false, message: 'Invalid token' });
        }

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
