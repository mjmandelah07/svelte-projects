import express from "express";
import path from "path";
import compression from "compression"; // Optional
import { fileURLToPath } from "url"; // Add this import

const __filename = fileURLToPath(import.meta.url); // Get the current module's filename
const __dirname = path.dirname(__filename); // Get the current module's directory name

const app = express();
const port = process.env.PORT || 3000;

// Use compression middleware (optional, recommended for production)
app.use(compression());

// Serve the public folder as static assets (CSS, JS, images, etc.)
app.use(express.static("public"));

// All other routes should serve the main HTML file
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
