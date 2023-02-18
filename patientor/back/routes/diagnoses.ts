import express from "express"

import diagnosisService from "../services/diagnoses"
import { Diagnosis } from "../types/types"

const router = express.Router()

router.get("/",(_req,res)=>{
    const diagnoses : Diagnosis[] = diagnosisService.getDiagnoses()
    res.send(diagnoses)
})

export default router;