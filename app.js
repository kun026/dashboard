import express from "express";
import axios from "axios";

const app = express();

app.use(express.static(`${__dirname}/public`));

export default app;
