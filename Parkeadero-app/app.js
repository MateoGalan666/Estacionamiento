const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

let espaciosOcupados = {};

app.post('/ocuparEspacio', (req, res) => {
    const espacioId = req.body.espacioId;

    if (!espaciosOcupados[espacioId]) {
        espaciosOcupados[espacioId] = true;
        res.json({ success: true, message: `Espacio ${espacioId} ocupado.` });
    } else {
        res.json({ success: false, message: `Espacio ${espacioId} ya está ocupado.` });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
