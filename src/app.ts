import express, { Request, Response } from 'express'
import getTimetable from './api/getTimetable'

const app = express();

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use(getTimetable);

app.listen(3000, () => {
  console.log(`[server]: Running!`);
});