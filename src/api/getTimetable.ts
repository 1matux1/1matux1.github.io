import express, { Request, Response } from 'express'

const router = express.Router()

router.post('/api/getTimetable', (req: Request, res: Response) =>{
  console.log(req);
  
  res.send(req.body.test).status(200)
})

export = router;
