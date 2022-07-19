const bcrypt = require('bcrypt');
const User = require('../model/user.model');

/**
 * Récupère tous les user 
 */
exports.getAll =async (req, res) => {
    let user = await User.find();
    if (user) {
        res.status(200).json({ user });
    } else {
        res.status(404).json({ message: "erreur" });
}};

/**
 * Récupère un user par son id
 * @param {string} req.params.id id du user à récupérer
 */
exports.getOne =async (req, res) => {
    let user = await User.findOne({ _id: req.params.id });
    if (user) {
        res.status(200).json({ user });
    } else {
        res.status(404).json({ message: "erreur" });
    }
};

/**
 * Inscription
 * @param {string} req.body informations du user à créer
 */
exports.signup = (req, res) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            let user = new User();
            user.email = req.body.email;
            user.password = hash;
            user.save();
            res.status(200).json({ user });
        })
        .catch((error) => {
            res.status(500).json({ error: error });
        });
};

/**
 * Connexion
 * @param {string} req.body.email email de connexion
 * @param {string} req.body.password password de connexion
 */
exports.login = async(req, res, next) => {
    let user = await User.findOne({ email: req.body.email })
    if (user) {
        bcrypt.compare(req.body.password, user.password)
            .then(valid => {
                if (!valid) {
                    return res.status(401).json({ error: 'incorrect password' });
                }
                res.status(200).json({ user });
            })
            .catch(error => res.status(500).json({ error }));
        /* TODO : sinon s'il n'existe pas, on retourne une erreur*/
    } else {
        res.status(404).json({ message: "utilisateur non trouvé" })
}};

/**
 * Modifie un user par son id
 * @param {string} req.params.id id du user à modifier
 * @param {string} req.body informations du user à modifier
 */
exports.update =async (req, res, next) => {
    let user = await User.findOne({ _id: req.params.id });
    bcrypt.hash(req.body.password, 10)
        .then(async hash => {

            user.email = req.body.email;
            user.password = hash;
            user.save();
        })
    res.status(201).json({ message: "Utilisateur mis à jour" });
};

/**
 * Supprime un user par son id
 * @param {string} req.params.id id du user à supprimer
 */
exports.delete = async(req, res) => {
    let user = await User.findOne({ _id: req.params.id });
    if (user) {
        user.delete();
        /*User.deleteOne({ _id: user._id });*/
        res.status(200).json({ message: "utilisateur supprimé" });
    } else {
        res.status(404).json({ message: "utilisateur non trouvé" });
    }
};