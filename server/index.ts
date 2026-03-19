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

async function startServer() {
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
    } catch (error) {
      console.error("Email sending error:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
