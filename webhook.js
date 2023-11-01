const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000;

app.listen(PORT, () => console.log(`El servidor esta corriendo en el puerto ${PORT}`));

app.post('/webhook', (req, res) => {
    console.log(req.body);
    res.status(200).end();
});


