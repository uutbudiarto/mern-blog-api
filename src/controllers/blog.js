const { validationResult } = require("express-validator");

exports.createBlog = (req, res, next) => {
  const title = req.body.title;
  // const image = req.body.image
  const body = req.body.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new Error("Invalid Value");
    err.errorStatus = 400;
    err.data = errors.array();
    throw err;
  }

  const result = {
    message: "Create Blog Success !",
    data: {
      title: title,
      image: "data-image-name.png",
      body: body,
      created_at: "12/12/2021",
      author: {
        uid: 1,
        name: "test name author",
      },
    },
  };
  res.status(201).json(result);
};
