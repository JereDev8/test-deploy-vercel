import express from 'express'

const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.post("/users", (req, res)=>{
    res.send('POST de users ejecutado exitosamente!')
})

app.listen(3000, () => console.log("Server ready on port 3000."));

export default app;