const Workout = require("../models/workoutSchema");
const router = require("express").Router();

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
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// router.post("/api/workouts/", (req, res) => {
//   Workout.find({})
//   .then(Workout => {
//     res.json(Workout);
//   })
//   .catch((err) => {
//     res.status(400).json(err);
//   });
// });

router.get("/api/workouts/range", (req, res) => {
  Workout.find()
    .then((Workout) => res.json(Workout))
    .catch((err) => console.error(err));
  console.log(req.body);
});
//error here//
router.put("/api/workouts/:id", ({ body, params }, res) => {
  console.log("router.put: " + body);
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    // "runValidators" will ensure new exercises meet our schema requirements
    { new: true, runValidators: true }
  )
    .then(Workout => {
      res.json(Workout);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
