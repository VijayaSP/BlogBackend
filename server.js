// import express from "express";
// import dotenv from "dotenv";
// import path from "path";
// import cors from "cors";

// import connectDB from "./config/db.js";
// import {
//   errorResponserHandler,
//   invalidPathHandler,
// } from "./middleware/errorHandler.js";

// // Route imports
// import userRoutes from "./routes/userRoutes.js";
// import postRoutes from "./routes/postRoutes.js";
// import commentRoutes from "./routes/commentRoutes.js";
// import postCategoriesRoutes from "./routes/postCategoriesRoutes.js";
// import chatRoutes from "./routes/chat.route.js"; // ✅ Gemini chatbot route
// import generateRoutes from "./routes/ai/generateRoutes.js"; // ✅ AI routes
// dotenv.config();
// connectDB();

// const app = express();

// // Middleware
// app.use(express.json());

// // ✅ Setup CORS to allow frontend on localhost:3000
// app.use(cors({ origin: 'http://localhost:3000', exposedHeaders: '*' }));

// // Test route
// app.get("/", (req, res) => {
//   res.send("Server is running...");
// });

// // ✅ Route usage
// app.use("/api/users", userRoutes);
// app.use("/api/posts", postRoutes);
// app.use("/api/comments", commentRoutes);
// app.use("/api/post-categories", postCategoriesRoutes);
// app.use("/api/ai", chatRoutes); // ✅ Mount AI chat routes
// app.use("/api/ai/generate", generateRoutes); // ✅ Mount AI routes
// // Serve static files
// app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// // Error handling
// app.use(invalidPathHandler);
// app.use(errorResponserHandler);

// // Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
import express from "express";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./config/db.js";
import cors from "cors";
import {
  errorResponserHandler,
  invalidPathHandler,
} from "./middleware/errorHandler.js";

// Load environment variables before importing routes
dotenv.config();

// Import routes AFTER dotenv.config()
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import postCategoriesRoutes from "./routes/postCategoriesRoutes.js";
import chatRoutes from './routes/chat.route.js';
import generateRoutes from './routes/ai/generateRoutes.js';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectDB();

const app = express();

app.use(express.json());

const corsOptions = {
  exposedHeaders: "*",
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Mount API routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/post-categories", postCategoriesRoutes);
app.use('/api/ai', chatRoutes);
app.use('/api/ai/generate', generateRoutes);

// Serve uploads folder statically
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(invalidPathHandler);
app.use(errorResponserHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
