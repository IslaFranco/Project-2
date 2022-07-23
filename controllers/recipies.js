//Dependencies
 const express = require("express");

 //route object
 const recipieRouter = express.Router();
 const Recipie = require("../models/recipie");

 //Seed Route
 const seedData = require('../models/recipieSeed');

recipieRouter.get('/seed', (req, res) => {
    Recipie.deleteMany({}, (error, allRecipies) => {})
    Recipie.create(seedData, (error, data) => {
        res.redirect('/recipies')
    })
})

//index route
recipieRouter.get('/', (req, res) => {
    Product.find({}, (error, allRecipies) => {
        res.render('index.ejs', { allRecipies })
    })
})

//new route
recipieRouter.get("/new", (req, res) => {
    res.render("new.ejs");
});

// delete route
recipieRouter.delete("/:id", (req, res) => {
    Recipie.findByIdAndDelete(req.params.id, (error, deletedTweet) => {
        res.redirect("/recipies");
    });
});

// update route
recipieRouter.put("/:id", (req, res) => {
    Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (error, updatedRecipie) => {
            res.redirect(`/recipies/${req.params.id}`);
        }
    );
});

// create route
recipieRouter.post("/", (req, res) => {
    Recipie.create(req.body, (err, createdRecipie) => {
        res.redirect("/recipies");
    });
});

// edit route
recipieRouter.get("/:id/edit", (req, res) => {
    Recipie.findById(req.params.id, (error, foundRecipie) => {
        res.render("edit.ejs", {foundRecipie});
    });
});

// show route
recipieRouter.get("/:id", (req, res) => {
    Recipie.findById(req.params.id, (error, foundRecipie) => {
        res.render("show.ejs", {foundRecipie});
    });
});

//Export router
module.exports = recipieRouter;
