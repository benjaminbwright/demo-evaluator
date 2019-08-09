const router = require('express').Router();

// disaplay all users
router.get("/users", (req, res) => {
  let users = [
    {name: "Ben"},
    {name: "Hazera"}
  ];
  res.json(users);
});

module.exports = router;