const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/append', (req, res) => {
    const newEntry = req.body;
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send("An error occurred");
        }
        const jsonData = JSON.parse(data || "[]");
        jsonData.push(newEntry);
        fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send("An error occurred");
            }
            res.send("Data appended successfully");
        });
    });
});

app.listen(5000, () => console.log('Server running on port 5000'));
