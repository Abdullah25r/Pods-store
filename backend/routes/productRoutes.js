import express from 'express'
const router = express.Router()

router.get("/test",(req,res)=>{
    res.send("from test routes")
})
export default router