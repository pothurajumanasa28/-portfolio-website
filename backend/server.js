const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const projectRoutes = require("./routes/projectRoutes");
// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/projects", projectRoutes);
// Check if MONGO_URI exists
if (!process.env.MONGO_URI) {
    console.error("❌ MONGO_URI not found in .env file");
    process.exit(1);
}

console.log("MONGO_URI exists:", !!process.env.MONGO_URI);
console.log("URI starts with:", process.env.MONGO_URI?.substring(0, 60));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB Connected");
    })
    .catch((err) => {
        console.error("❌ MongoDB Error");
        console.error(err);
    });

// Test Route
app.get("/", (req, res) => {
    res.send("Portfolio Backend Running 🚀");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});