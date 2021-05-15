exports.createProduct = (req, res, next) => {
    const name = req.body.name;
    const price = req.body.price;
  res.json(
      {
          message : "create product success!!!",
          data : {
              id : 1,
              name : name,
              price : price
          }
      }
  );
  next();
};

exports.getProducts = (req,res,next)=>{
    res.json(
        {
            message : "get product success!!!",
            data : [
                {
                    id : 1,
                    name : "Pasta gigi",
                    price : 8000
                },
                {
                    id : 2,
                    name : "Sa",
                    price : 8000
                }
            ]
        }
    );
    next()
}
