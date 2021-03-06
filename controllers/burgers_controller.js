var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", (req,res) => {
    burger.selectAll(data => {
        var hbsObject ={
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req,res) => {
    burger.insertOne(["burger_name"], [req.body.name], result => {
        res.json({id: result.insertedId})
    });
});

router.put("/api/burgers/:id", (req,res) => {
    var condition = "id = " + req.params.id;
    console.log("condition: ", condition);

    burger.updateOne({
        devoured: req.body.devoured
    },
        condition,

        result => {
            if (result.changedRows ==0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        }
  );
});

module.exports = router;