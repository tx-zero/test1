import express from "express";

var app = express();

app.get("/users", (req, res, next) => {
    res.json(["Tony","Dani","Pete","Rani","Dale","Jared"]);
   });

app.get("/dalehealthcheck", (req, res, next) => {
    res.status(200).end();
});

var port = process.env.PORT ?? 3000;

app.listen(port, () => {
 console.log("Server running on port " + port);
});
