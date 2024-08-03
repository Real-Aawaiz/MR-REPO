
import mongoose from "mongoose"

export function connectKaro(){

    mongoose.connect("mongodb+srv://aawaiziftikhar20069:yeMERIdataBASE@cluster0.efxzq7e.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0").then(function(connection){

        console.log(connection)
        console.log("db conncet hoyi")

    }).catch(function(err){
        console.log(err);
    });

}