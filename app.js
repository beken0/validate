const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
const port = 3000;

// JSON body parser middleware
app.use(express.json());

// Route for JSON validation
app.post('/validate', [
    // Validate 'name' field
    body('name').isString().notEmpty(),
    // Validate 'age' field
    body('age').isInt({ min: 0 }),
    // Validate 'email' field
    body('email').isEmail()
], (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // If valid, send success message
    return res.status(200).json({ message: 'JSON is valid!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
