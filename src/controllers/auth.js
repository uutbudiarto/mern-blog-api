exports.register = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const result = {
    message: "Regiter berhasil",
    data: {
      uid: 1,
      name: name,
      email: email,
    },
  };
  res.status(201).json(result);
};
