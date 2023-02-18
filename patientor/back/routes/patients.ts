import express from "express"

import patientsService from "../services/patients"
import { PatientNoSSN } from "../types/types"

const router = express.Router()

router.get("/",(_req,res)=>{
    const patients : PatientNoSSN[] = patientsService.getPatientsNoSSN()
    res.send(patients)
})

export default router;