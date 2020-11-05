const mongoose= require("mongoose");
const Schema=mongoose.Schema;

const workoutSchema= new Schema({
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [{
        name: {
            type: String,
            trim: true,
            required: "Enter name of workout",
        },
        type:{
            type: String,
            trim: true,
            required: "Type of workout",
        },
        weight:{
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets:{
            type: Number,
        },
        distance:{
            type: Number,
        },
        duration:{
            type: Number,
            required: "Enter length of workout",
        },
    },
    ]},
    {
        toJSON: {
            virtuals: true
        }
    });
    workoutSchema.virtual("totalDuration").get(function(){
    return this.exercises.reduce((total, exercise)=>{
        return total + exercise.duration;
    }, 0);

    });
    const Workout= mongoose.model("Workout", workoutSchema);

    module.exports=Workout;