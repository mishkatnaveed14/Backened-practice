const agecheck = (req, res, next) => {
  const age = req.query.age;
  if (!age) {
    res.json({ message: "Age is required", sucess: false });
  } else if (age < 18) {
    res.json({ message: "Age is denied", sucess: false });
  } else {
    next();
  }
};
module.exports = agecheck