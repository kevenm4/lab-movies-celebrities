// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

router.get("/celebrities/create", (req, res, next) =>
    res.render("celebrities/new-celebrity")
);
router.post("/celebrities/create", (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;

    Celebrity.create({ name, occupation, catchPhrase })
        .then(() => {
            res.redirect("/celebrities");
        })
        .catch((err) => res.render("celebrities/new-celebrity"));
});

router.get("/celebrities", (req, res, next) => {
    Celebrity.find()
        .then((celebritiesfromDB) =>
            res.render("celebrities/celebrities", { celebritiesfromDB })
        )
        .catch((err) => next(err));
});

module.exports = router;