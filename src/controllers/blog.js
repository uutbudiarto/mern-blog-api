exports.createBlog = (req, res, next) => {
  const title = req.body.title;
  // const image = req.body.image
  const body = req.body.body;
  const result = {
    message: "Create Blog Success !",
    data: {
      title: "data title",
      image: "data-image-name.png",
      body: "data body content blog",
      created_at: "12/12/2021",
      author: {
        uid: 1,
        name: "test name author",
      },
    },
  };
  res.status(201).json(result)
};
