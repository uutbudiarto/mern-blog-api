exports.createProduct = (req, res, next) => {
  res.json(
      {
          message : "create product success!",
          data : {
              id : 1,
              name : "Pasta gigi",
              price : 8000
          }
      }
  );
  next();
};

exports.getProducts = (req,res,next)=>{
    res.json(
        {
            message : "get product success!",
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
