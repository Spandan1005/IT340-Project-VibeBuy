const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 9000;

app.use(cors({
  origin: 'http://192.168.10.10:4200',
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.options('*', cors());
app.use(express.json());

// Log Collector Endpoint
app.post('/api/logs', (req, res) => {
    const logEntry = req.body;

    // Formatting the output for the console
    const timestamp = logEntry.timestamp || new Date().toISOString();
    const level = logEntry.level || 'IT340_LOG';
    const message = logEntry.message || 'No message';
    const source = logEntry.source || 'Unknown Source';

    console.log(`[${timestamp}] [${source}] [${level}] ${message}`);

    if (logEntry.details) {
        console.log('Details:', JSON.stringify(logEntry.details, null, 2));
    }
    console.log('----------------------------------------');

    res.status(200).send({ status: 'Log received' });
});

app.listen(PORT, () => {
    console.log(`DevOps Log Collector running on port ${PORT}`);
    console.log('Waiting for logs from Frontend_Angular...');
});