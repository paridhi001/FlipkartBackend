import mongoose  from "mongoose";



const Connection =  async (URL) => {
    try{
     await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex:true});
     console.log('DataBase Connected Successfully.');
    } catch(error) {
        console.log('Error: ', error.message);
    }
 }
export default Connection;