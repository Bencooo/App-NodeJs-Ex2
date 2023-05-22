const ProductModel =  require('../models/product.model');

module.exports.getProducts = async (req, res) => {
    const products = await ProductModel.find();
    res.status(200).json(products);
}

module.exports.getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await ProductModel.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Ce produit n'existe pas" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur est survenue lors de la récupération du produit" });
  }
};

module.exports.setProducts = async (req, res) => {
    if (!req.body.name) {
        res.status(400).json({message : "Merci d'ajouter un nom au produit"})
    }

    const product = await ProductModel.create({
        name: req.body.name,
        detail: req.body.detail,
    });
    res.status(200).json(product);
};

module.exports.editProduct = async (req, res) => {
    const product = await ProductModel.findById(req.params.id);
  
    if (!product) {
      res.status(400).json({ message: "Ce post n'existe pas" });
    }
  
    const updateProduct = await ProductModel.findByIdAndUpdate(product, req.body, {
      new: true,
    });
  
    res.status(200).json(updateProduct);
  };

  module.exports.deleteProduct = async (req, res) => {
    const product = await ProductModel.findById(req.params.id);
  
    if (!product) {
      res.status(400).json({ message: "Ce post n'existe pas" });
    }
    await product.deleteOne({ _id: product })
    res.status(200).json("Message supprimé " + req.params.id);
  };