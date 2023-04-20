const express = require('express');
const format=require('./format.js');

const app = express();
const port = 3000;

app.use(express.raw({ type: '*/*' }));

app.post('/format', async (req, res) => {
    try {
        const sourceCode = req.body.toString();
        if (!sourceCode) {
            return res.status(400).send('Source code is required');
        }
        let updateSource = await format(sourceCode)
        res.status(200).send(Buffer.from(updateSource));
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while formatting the code');
    }
});

app.listen(port, () => {
    console.log(`Groovy Formatter listening at http://localhost:${port}`);
});





