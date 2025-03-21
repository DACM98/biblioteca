const express = require("express");
const app = express();
const empleadoRouter = require("./router/empladoRouter");
app.use(express.json());
app.use("/api", empleadoRouter);
app.use("/api", empresaRouter);


const PORT =  4002;
app.listen(PORT, () => {
    console.log("servidor corriendo en el puerto");
});