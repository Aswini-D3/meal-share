/*const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
// const { sum } = require("../database"); 
const mealsRouter = require("./api/meals");
const oneMealRouter = require("./api/meal")
const reservationsRouter = require("./api/reservations");
const reviewsRouter = require("./api/reviews");
const { response } = require("express");
const port = process.env.PORT || 3000;
// For week4 no need to look into this!
// Serve the built client html
const buildPath = path.join(__dirname, "./../frontend");
app.use(express.static(buildPath));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
router.use("/meal", oneMealRouter);
router.use("/meals", mealsRouter);
router.use("/reservations", reservationsRouter);
router.use("/reviews", reviewsRouter);
app.use("/api", router);
app.post("/api",(request,response) => {
  console.log(request);
})
// For week4 no need to look into this!
// Ensures that the client router works on reload aswell.
// Sends all requests back to index.html where the routing lib takes over
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./../frontend/index.html"), function (
    err
  ) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
app.listen(port, () => console.log(`Server listening on port ${port}!`)); console.log(`Server listening on port ${port}!`);*/
const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

const port = process.env.PORT || 3000;

const buildPath = path.join(__dirname, "./../frontend");
app.use(express.static(buildPath));


// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

const mealsRouter = require("./api/meals");
router.use("/meals", mealsRouter);

/*const oneMealRouter = require("./api/meal");
router.use("/meal", oneMealRouter);*/

const reservationRouter = require("./api/reservations");
router.use("/reservations", reservationRouter);

const reviewRouter = require("./api/reviews");
router.use("/reviews", reviewRouter);

app.use("/api", router);

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "./../frontend/index.html"), function (
      err
    ) {
      if (err) {
        res.status(500).send(err);
      }
    });
  });

app.listen(port, () => console.log(`Server listening on port ${port}!`));
