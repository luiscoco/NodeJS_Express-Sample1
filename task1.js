let express = require('express');

let app = express();

app.get("/notes", function(req,res) {
   let notes = [
       {text: "First note"},
       {text: "Second note"},
       {text: "Third note"}
   ]
   res.send(notes);
});

app.listen(3000);
