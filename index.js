const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/format', async (req, res) => {
    try {
        const sourceCode = req.body.sourceCode;
        if (!sourceCode) {
            return res.status(400).json({ error: 'Source code is required.' });
        }
        let updateSource = await format(sourceCode)
        res.status(200).json({ "success": true, "sourceCode": updateSource });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while formatting the code.' });
    }
});

app.listen(port, () => {
    console.log(`Groovy Formatter listening at http://localhost:${port}`);
});





