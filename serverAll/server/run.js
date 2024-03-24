import express from 'express';
import { app as usersRouter } from '../server/users.js';
import {app as postsRouter } from '../server/posts.js';
import { app as todosRouter } from '../server/todos.js';
import { app as commentsRouter } from '../server/comments.js';

export const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/todos", todosRouter);
app.use("/comments", commentsRouter);

const PORT = 3305;
app.listen(PORT, () => {
    console.log("Server is running on port 3305");
});
