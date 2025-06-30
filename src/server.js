const app = require('./index.js');
const {connectDb} = require('./config/db.js')

const PORT = 5454;
app.listen(PORT,async()=>{
    await connectDb();
    console.log(`ecommerce api on PORt:${PORT}`);
})