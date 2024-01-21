const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/append', (req, res) => {
    const newEntry = req.body;
    const jsonFilePath = path.join(__dirname, '../client/src/flow/bounties.json');

    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send("An error occurred reading the file");
        }

        let jsonData;
        try {
            jsonData = JSON.parse(data);
        } catch (parseErr) {
            console.error(parseErr);
            return res.status(500).send("Error parsing JSON data");
        }

        if (!jsonData.bounties || !Array.isArray(jsonData.bounties)) {
            return res.status(500).send("Invalid JSON structure: 'bounties' key not found or not an array");
        }

        jsonData.bounties.push(newEntry);

        fs.writeFile(jsonFilePath, JSON.stringify(jsonData, null, 2), (writeErr) => {
            if (writeErr) {
                console.error(writeErr);
                return res.status(500).send("An error occurred writing the file");
            }
            res.send("Data appended successfully");
        });
    });
});

// Additional endpoint in your Node.js server
app.post('/remove-bounty', (req, res) => {
    const { index } = req.body; // Get the index from the request
    const jsonFilePath = '../client/src/flow/bounties.json'; // Update with the correct path

    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send("An error occurred reading the file");
        }

        let jsonData;
        try {
            jsonData = JSON.parse(data);
        } catch (parseErr) {
            console.error(parseErr);
            return res.status(500).send("Error parsing JSON data");
        }

        // Remove the bounty at the given index
        jsonData.bounties.splice(index, 1);

        fs.writeFile(jsonFilePath, JSON.stringify(jsonData, null, 2), (writeErr) => {
            if (writeErr) {
                console.error(writeErr);
                return res.status(500).send("An error occurred writing the file");
            }
            res.send("Bounty removed successfully");
        });
    });
});


app.listen(5000, () => console.log('Server running on port 5000'));
