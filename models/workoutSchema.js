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
            required: "Enter name of workout"
        },
        workoutType:{
            type: String,
            trim: true,
            required: "Type of workout"
        },
        sets:{
            type: Number,
            required: "Enter number of sets"
        },
        reps: {
            type: Number,
            required: "Enter number of reps"
        },
        duration:{
            type: Number,
            required: "Enter length of workout"
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

    module.exports=Workout