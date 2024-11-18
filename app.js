const express = require('express');
const app = express();
const port = 3000;

// Constants Data
const constants = {
    math: {
        pi: 3.14159,
        e: 2.71828,
        goldenRatio: 1.61803
    },
    physics: {
        speedOfLight: '299792458 m/s',
        gravitationalConstant: '6.67430 × 10^-11 m³⋅kg⁻¹⋅s⁻²',
        plancksConstant: '6.62607015 × 10^-34 J⋅s'
    },
    chemistry: {
        avogadro: '6.02214076 × 10^23 mol⁻¹',
        gasConstant: '8.314 J⋅mol⁻¹⋅K⁻¹',
        boltzmann: '1.380649 × 10^-23 J⋅K⁻¹'
    }
};

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Constants API!', endpoints: ['/math', '/physics', '/chemistry'] });
});

app.get('/math', (req, res) => {
    res.json(constants.math);
});

app.get('/physics', (req, res) => {
    res.json(constants.physics);
});

app.get('/chemistry', (req, res) => {
    res.json(constants.chemistry);
});

// Error Handling
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

// Start the Server
app.listen(port, () => {
    console.log(`Constants API is running at http://localhost:${port}`);
});