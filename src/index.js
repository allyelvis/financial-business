const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;  // Use environment variable PORT or default to 3000

// Middleware to serve static files from the 'src' directory
app.use(express.static(path.join(__dirname, 'src')));

// Route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Financial Management Routes
app.get('/budgeting', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'budgeting.html'));
});

app.get('/expense-tracking', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'expense-tracking.html'));
});

app.get('/investment-tracking', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'investment-tracking.html'));
});

app.get('/tax-preparation', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'tax-preparation.html'));
});

// Business Management Routes
app.get('/crm', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'crm.html'));
});

app.get('/inventory-management', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'inventory-management.html'));
});

app.get('/sales-marketing', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'sales-marketing.html'));
});

app.get('/project-management', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'project-management.html'));
});

// Accounting Routes
app.get('/invoicing', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'invoicing.html'));
});

app.get('/payroll', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'payroll.html'));
});

app.get('/financial-reporting', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'financial-reporting.html'));
});

// Market Analysis Routes
app.get('/market-research', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'market-research.html'));
});

app.get('/competitive-analysis', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'competitive-analysis.html'));
});

app.get('/sales-forecasting', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'sales-forecasting.html'));
});

// Settings and Profile Routes
app.get('/settings', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'settings.html'));
});

app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'profile.html'));
});

app.get('/help', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'help.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});