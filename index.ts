import express from "express";
import { calculateBmi } from "./bmiCalculator";
import { calculateExercise } from "./exerciseCalculator";
const app = express();

app.get("/hello",(_req,res)=>{
  res.send("Hello Full Stack!");  
});
app.get("/bmi",(req,res)=>{
    const weight = Number(req.query.weight);
    const height = Number(req.query.height);
    if(isNaN(weight) || isNaN(height)) {
        res.status(400).send({error:"malformatted parameters"});
    }
    const result = calculateBmi(height,weight);
    res.json({"weight":weight,
              "height":height,
              "bmi":result
    });
});

app.post('/calculate', (req, res) => {
    const { hours, target} = req.body;
    if(!hours || !target) res.status(400).send({error:"missing parameters"});
    if(isNaN(hours) || isNaN(target)) res.status(400).send({error:"malformated parameters"});
    const result = calculateExercise(target,hours);
    res.send({ result });
  });

const PORT = 3000;

app.listen(PORT,()=>console.log("server running on port "+PORT));