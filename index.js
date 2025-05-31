// index.js
const express = require('express');
const os = require('os');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Root route
app.get('/', (req, res) => {
  res.send(`
    <h1>🚀 Node.js App Deployed via GitLab CI/CD</h1>
    <p><strong>Status:</strong> Live & Running on AWS EC2</p>
    <p><strong>Server:</strong> ${os.hostname()}</p>
    <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
    <p style="color: gray;">Powered by Docker & GitLab CI</p>
  `);
});

// Health check route (optional for monitoring)
app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is live at http://localhost:${PORT}`);
});
