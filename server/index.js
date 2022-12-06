const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {
  getCompliment,
  getFortune,
  getRoleModels,
  addRoleModel,
  deleteRoleModel,
  editRoleModel,
} = require("./controller");

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/roleModels", getRoleModels);
app.post("/api/addRoleModel", addRoleModel);
app.delete("/api/deleteRoleModel/:id", deleteRoleModel);
app.put("/api/editRoleModel", editRoleModel);

app.listen(4000, () => console.log("Server running on 4000"));
