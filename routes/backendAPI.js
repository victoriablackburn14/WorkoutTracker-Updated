const Workout = require("../models/workoutSchema");
const router = require("express").Router();

// module.exports =function (app) {
router.post("/api/workouts", ({ body }, res) => {
  Workout.create({ day: new Date() })
    .then((data) => res.json(data))
    .catch((e) => console.error(e));
});

router.get("/api/workouts", (req, res) => {
  console.log("router.get: " + res);
  Workout.find({}, (error, data) => {
    if (error) {
      res.send(error);
    }else {
      console.log(data);
      res.json(data);
    }
  })
});

/*
router.post("/api/workouts", (req, res) => {
  Workout.find({})
    .then(Workout => {
      res.json(Workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
*/

/*
router.post("/api/workouts/", (req, res) => {
  Workout.find({})
  .then(Workout => {
    res.json(Workout);
  })
  .catch((err) => {
    res.status(400).json(err);
  });
});
*/

router.get("/api/workouts/range", (req, res) => {
  Workout.find()
    .then(Workout => res.json(Workout))
    .catch((err) => console.error(err));
  console.log(req.body);
});

router.put("/api/workouts/:id", (req, res) => {
  console.log("router.put: " + req.body);
  Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body } },
    { new: true, runValidators: true }
  )
    .then(() => res.sendStatus(200))
    .catch((err) => console.error(err));
});
module.exports = router;
