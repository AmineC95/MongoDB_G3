//const Comment = require('../model/category.model');

const Category = require("../model/category.model");


/**
 * Récupère les categories
 */
exports.getAll = (req, res, next) => {

};


/**
 * Récupère une categorie par son id
 * @param {string} req.params.id id du categorie à récupérer
 */
exports.get = (req, res, next) => {
    let categorie = await Category.findOne({ _id: req.params.id });
    if (categorie) {
        res.status(200).json({ categorie });
    } else {
        res.status(404).json({ message: "Votre categorie n'est pas reconnu" });
    }
};

/**
 * Crée une nouvelle categorie
 * @param {string} req.body informations de la categorie à créer
 */
exports.create = (req, res) => {
    let category = new Category();
 category.title = req.body.name;
 category.content = req.body.description;
 category.save();
 res.status(200).json({ category });
};

/**
 * Supprime une categorie par son id
 * @param {string} req.params.id id de la categorie à supprimer
 */
exports.delete = (req, res, next) => {
    let category = await Category.findOne({ _id: req.params.id });
    if (category) {
        category.delete();
        
        res.status(200).json({ message: "Category supprimé" });
    } else {
        res.status(404).json({ message: "Category non trouvé" });
    }
};