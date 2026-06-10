require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/db/db');
require('dotenv').config({path: '../.env'});
const port = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connectDB();
        app.listen(port, () => {
            console.log("App running on port", port);
        });
    } catch (error) {
        console.error("ERROR || SERVER FILE || ", error);
        process.exit(1);
    }
}

startServer();