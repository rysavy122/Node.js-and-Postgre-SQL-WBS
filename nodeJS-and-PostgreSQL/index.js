import  express  from "express";

import routingHome from './routing/routingHome.js';
import routingUsers from './routing/routingUsers.js';
import routingOrders from './routing/routingOrders.js';

const PORT = 4000;
const app = express();


app.listen(PORT,()=>console.log("Express server running on PORT "+ PORT))




app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', routingHome);
app.use('/users', routingUsers);
app.use('/orders', routingOrders);


