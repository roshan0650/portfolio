import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(__dirname, "..", ".env.local") });

const app = express();
const server = createServer(app);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize email transporter (Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER || "roshan00179@gmail.com",
    pass: process.env.GMAIL_PASSWORD || "", // Must be an App Password, not your regular password
  },
});

// Email sending endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (!process.env.GMAIL_PASSWORD) {
      console.error("Vercel Configuration Error: GMAIL_PASSWORD is not set in Environment Variables!");
      return res.status(500).json({ error: "Server missing email credentials. Please check Vercel environment variables." });
    }

    // Send email
    await transporter.sendMail({
      from: process.env.GMAIL_USER || "roshan00179@gmail.com",
      to: "roshan00179@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Message from Portfolio Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><em>Reply to: ${email}</em></p>
      `,
      replyTo: email,
    });

    res.json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Email sending error:", error);
    res.status(500).json({ error: error.message || "Failed to send email" });
  }
});

// Serve static files from dist/public in production/local
const staticPath =
  process.env.NODE_ENV === "production"
    ? path.resolve(__dirname, "public") // When built to dist
    : path.resolve(__dirname, "..", "dist", "public");

app.use(express.static(staticPath));

// Handle client-side routing - serve index.html for all routes
app.get("*", (_req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

const port = process.env.PORT || 3000;

if (!process.env.VERCEL) {
  server.listen(port, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${port}/`);
  });
}

export default app;
