const express =require("express");
const Routes = require('./routes/Routes');
const sequelize = require('./config/mysql');

const app =express();

app.use(express.json());

const port =3030;


app.use('/', Routes);

sequelize.sync().then(() => {
    console.log('Synced with DB');
}).catch((error) => {
    console.error('Unable to sync with DB:', error);
});







app.listen(port,() =>{
    console.log(`server started ${port}`);

})

