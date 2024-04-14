"use server"
import mongoose from "mongoose";

const connectionString:string  = process.env.MONGODB_CS as string ; 

export async function connectToDB(){

  try{
    if(mongoose.connection.readyState == 1){
      console.log('already connected to db')
      return ; 
    }
    mongoose.connect(connectionString, {dbName: 'no-big-url'})
    console.log('connected to db')

  }
  catch(err)
{
  console.log(err)
  console.log("couldn't connect to db")
}

}