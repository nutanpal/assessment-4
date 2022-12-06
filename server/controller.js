//////Inspire User////
//  Role model Array ///
const roleModels = [
  "Rachel Hollis",
  "Elon Musk",
  "Mahatma Gandhi",
  "Mother Teresa",
  "Barbara McClintock",
  "Leonardo da Vinci",
  "Isaac Newton",
  "Temple Grandin",
  "Bill Gates",
];

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  //  Array fortune
  getFortune: (req, res) => {
    const fortunes = [
      "A fresh start will put you on your way.",
      "All will go well with your new project.",
      "An important person will offer you support.",
      "Donot just think, act!",
      "Now is the time to go ahead and pursue that love interest!",
      "You will be traveling and coming into a fortune.",
      "Your quick wits will get you out of a tough situation.",
    ];

    // function for random fortune
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    //send fortune & status success
    res.status(200).send(randomFortune);
  },
  ////RoleModel///

  getRoleModels: (req, res) => {
    res.status(200).send(roleModels);
  },

  addRoleModel: function (req, res) {
    let { item } = req.body;
    roleModels.push(item);
    res.status(200).send(roleModels);
  },

  deleteRoleModel: (req, res) => {
    let index = req.params.id;
    roleModels.splice(index, 1);
    res.status(200).send(roleModels);
  },

  editRoleModel: (req, res) => {
    let index = req.params.id;
    let {item} = req.body;
    roleModels.splice(index, 1, item);
    res.status(200).send(roleModels);
  },
};
