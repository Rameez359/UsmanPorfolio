const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  fs.readFile("./files/arts.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed.", err);
      return res.status(500).send("Error reading file");
    }

    try {
      const fileData = JSON.parse(jsonString);
      res.render("index", { fileData });
    } catch (error) {
      console.log("Error parsing JSON:", error);
      return res.status(500).send("Error parsing JSON");
    }
  });
});

app.get("/postIllustration", async (req, res) => {
  //get data from folder and json files to show images with details
});

app.listen(3000, () => console.log("Server is running on port 3000"));
