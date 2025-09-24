import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

dotenv.config(); // to get the mongo_uri
// console.log(process.env.MONGO_URI);

const app = express();
const port = process.env.PORT || 5001;

//middleware- used to get access to req.body, to get access to the values that we send as json
app.use(
  cors({
    origin: "http://localhost:5173",
  })
); // To get rid of the cors error
app.use(express.json()); // this middleware will parse the JSON bodies: req.body
app.use(rateLimiter); // to limit the number of response

// Adding middleware
// app.use((req, res, next) => {
//   console.log(`Request method is ${req.method} and request URL is ${req.url}`);
//   next(); // before fullfilling the request, middleware will be called and then the request will be fulfilled
// });
app.use("/api/notes", notesRoutes);

// We first want to connect the database and then connect to the server
// Once the DB is connected then only go ahead and listen
connectDB().then(() => {
  app.listen(port, () => {
    console.log("Server started on port: ", port);
  }); // to listen on a port
});

// What is an Endpoint?
// An endpoint is a combination of a URL + HTTP method that lets the client ineract with a specific resource.

// mongodb+srv://sakshi23042005_db_user:o3NkwWXP8h9kJ952@cluster0.ykpc1o1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
