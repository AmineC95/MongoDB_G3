const Posts = require('../model/product.model');


/**
 * Récupère tous les produits 
 */
exports.getAll = (req, res) => {

};

/**
 * Récupère un produit par son id
 * @param {string} req.params.id id du produit à récupérer
 */
exports.get = (req, res) => {

};

/**
 * Crée un nouveau produit
 * @param {string} req.body informations du produit à créer
 */
exports.create = (req, res) => {
    let post = new Posts();
    post.name = req.body.name;
    post.description = req.body.description;
    post.prix = req.body.prix;
    post.stock = req.body.stock;
    post.author_id = req.body.author_id;
    post.save();
    res.status(200).json({ post });

   };
/**
 * Modifie un produit par son id
 * @param {string} req.params.id id du produit à modifier
 * @param {string} req.body informations du produit à modifier
 */
exports.update = async (req, res, next) => {
    let post = await Post.findOne({_id: req.params.id});
    if(post){

        post.name = req.body.name;
        post.description = req.body.description;
        post.prix = req.body.prix;
        post.stock = req.body.stock;

        post.save();
        
        res.status(201).json({ message: "mis à jour" });
    }else{
        res.status(404).json({message: "mise a jour raté"});
    }


};

/**
 * Supprime un produit par son id
 * @param {string} req.params.id id du produit à supprimer
 */
exports.delete = (req, res, next) => {

};