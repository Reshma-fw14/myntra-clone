const express = require("express");
const router = express.Router();

const Product = require("../models/productModel");

router.get("", async (req, res) => {
  try {
    console.log(req.query)
    // const _limit = 10;
    const { _page, _limit } = req.query;
    let filter = [];
    for (let key in req.query) {
      if (key !== "_page") {
        filter.push({ [key]: req.query[key] });
      }
    }
    filter = filter.length==0 ? [{}] : filter
    const data = await Product.find({ $and: [...filter] })
      .skip((_page - 1) * _limit)
      .limit(_limit)
      .lean()
      .exec();
    //    return res.json({msg:filter})
    const totalPages = Math.ceil(
      (await Product.find({ $and: [...filter] }).countDocuments()) / _limit
    );
    return res.send({ data, totalPages });
  } catch (e) {
    return res.json({ err: e });
  }
});

router.post('', async(req,res)=>{
    try{
       const product=await Product.create(req.body);
       return res.send(product)
    }catch(err){
        return res.status(500).send(err.message)
    }
})

// router.get('', async(req,res)=>{
//     try{
//        const product=await Product.find().lean().exec();
//        return res.send(product)
//     }catch(err){
//         return res.status(500).send(err.message)
//     }
// })

router.delete('/:id', async(req,res)=>{
    try{
       const product=await Product.findOneAndDelete(req.params.id);
       return res.send(product)
    }catch(err){
        return res.status(500).send(err.message)
    }
})

module.exports = router;

// const Product = require("../model/product_model");

// const Product_controller = async (req, res) => {
//   try {
//     console.log(req.query);
//     const _limit = 8;
//     const { _page, _sort } = req.query;
//     let filter = [];
//     for (var key in req.query) {
//       if (key !== "_sort" && key !== "_limit" && key !== "_page")
//         filter.push({ [key]: req.query[key] });
//     }
//     console.log(filter);
//     const data = await Product.find({
//       $and: [...filter],
//     })
//       .sort({ price: _sort })
//       .skip((_page - 1) * _limit)
//       .limit(_limit)
//       .lean()
//       .exec();

//     const totalPages = Math.ceil(
//       (await Product.find({ $and: [...filter] }).countDocuments()) / _limit
//     );
//     return res.send({ data, totalPages });
//   } catch (e) {
//     return res.json({ err: e });
//   }
// };

// module.exports = Product_controller;


