import express from "express";

const app = express();
app.use(express.json());

app.get("/",(req,res)=>
{
    return res.status(200).send('<h1>Hello World !!</h1>')
})

app.get("/ping",(req,res)=>res.status(200).send("<h1>Pong !!</h1>"));

app.listen(4500, () => {
    console.log("App is Running At port 4500");
});