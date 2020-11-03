const db = require("../models");
const router= require ("express").Router();

// module.exports =function (router) {
    router.get("/api/workouts", (req, res) => {
        db.Workout.find({})
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });
      router.post("/api/workouts", (req, res) => {
        db.Workout.find({})
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });  
      router.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });
      router.post("/api/workouts/range", (req, res) => {
        db.Workout.find({})
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });  

      router.put("/api/workouts/:id", function ({ body, params }, res){
          db.Workout.findByIdAndUpdate(
              params.id,
              {$push: {exercises: body}},
              { new: true, runValidators: true}).then(dbWorkout => {
                  res.json(dbWorkout);
              }).catch(err => {
                res.status(400).json(err);
              });
            });
        

  module.exports= router;
