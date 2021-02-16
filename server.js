// Bring express then Initialize it into a variable called "app"
const express = require('express');
const app = express();

app.get('/', (req, res) => res.json({ msg: 'Hello ..my name is Alia' }));

//Define the routes (the way we do that is with "app.use")
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// Create a variable for the port and set it to "process.env.PORT" and this will look for an enviroment variable called PORT "that is used in production", but when the app is not in production mode "in development mode" it will look for port 5000
const PORT = process.env.PORT || 5000;
// pass in the variable "PORT" which the app will be listening to, but you can insert a call back if you want something else to happen
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
