const baseURL = "http://localhost:4000";
//1. Select HTML Element
const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const getRoleModelsBtn = document.getElementById("getRoleModels");
const roleModelStack = document.getElementById("displayRoleModels");
//Set query selector; //display fun in html div
//form-Add & delete
const addForm = document.getElementById("addForm");
const addInput = document.getElementById("addInput");
const deleteForm = document.getElementById("deleteForm");
const deleteInput = document.getElementById("deleteInput");

//form-Edit
const editForm = document.getElementById("editForm");
const editIndex = document.getElementById("editIndex");
const editInput = document.getElementById("editInput");

//2. Create Function
const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};
/////////2.2 fortune
const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};
/////////2.3 Role Model
const getRoleModels = () => {
  axios
    .get(`${baseURL}/api/roleModels`)
    .then((res) => {
      console.log(res.data);
      const roleModels = res.data;
      roleModelStack.innerHTML = "";

      for (let i = 0; i < roleModels.length; i++) {
        let newRoleModel = document.createElement("li");
        newRoleModel.textContent = roleModels[i];
        roleModelStack.appendChild(newRoleModel);
      }
      addInput.value = "";
    })
    .catch((err) => {
      console.log(err);
    });
};

const addNewItem = (event) => {
  event.preventDefault();

  let bodyObj = {
    item: addInput.value,
  };

  //post
  axios
    .post(`${baseURL}/api/addRoleModel`, bodyObj)
    .then((res) => {
      console.log(res.data);
      const roleModels = res.data;
      roleModelStack.innerHTML = "";

      for (let i = 0; i < roleModels.length; i++) {
        let newRoleModel = document.createElement("li");
        newRoleModel.textContent = roleModels[i];
        roleModelStack.appendChild(newRoleModel);
      }

      addInput.value = "";
    })
    .catch((err) => {
      console.log(err);
    });
};

//delete
const deleteItem = (event) => {
  event.preventDefault();

  axios
    .delete(`${baseURL}/api/deleteRoleModel/${deleteInput.value}`)
    .then((res) => {
      console.log(res.data);
      const roleModels = res.data;
      roleModelStack.innerHTML = "";

      for (let i = 0; i < roleModels.length; i++) {
        let newRoleModel = document.createElement("li");
        newRoleModel.textContent = roleModels[i];
        roleModelStack.appendChild(newRoleModel);
      }
      deleteInput.value = "";
    });
};

//edit
const editItem = (event) => {
  event.preventDefault();

  let bodyObj = {
    item: editInput.value,
  };
  axios.put(`${baseURL}/api/editRoleModel/${editIndex.value}`, bodyObj)
    .then((res) => {
      const roleModels = res.data;
      roleModelStack.innerHTML = "";

      for (let i = 0; i < roleModels.length; i++) {
        let newRoleModel = document.createElement("li");
        newRoleModel.textContent = roleModels[i];
        roleModelStack.appendChild(newRoleModel);
      }
      editIndex.value = ""
      editInput.value = ""
    });
};

//3. Combine with Event listner
complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
getRoleModelsBtn.addEventListener("click", getRoleModels);
addForm.addEventListener("submit", addNewItem);
deleteForm.addEventListener("submit", deleteItem);
editForm.addEventListener("submit", editItem);
