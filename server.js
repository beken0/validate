const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/validate', (req, res) => {
    try {
        JSON.parse(JSON.stringify(req.body));
        res.json({ valid: true, errors: null });
    } catch (error) {
        res.json({ valid: false, errors: 'Invalid JSON format' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
