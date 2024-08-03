import mongoose from "mongoose";

export function meridatabase(){
    mongoose.connect("mongodb+srv://aawaiziftikhar20069:yeMERIdataBASE@cluster0.efxzq7e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(function(connect){
        console.log(connect)
        console.log("hello g")

    }).catch(function(error){
        console.log(error)
    })
}