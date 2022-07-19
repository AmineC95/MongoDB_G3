const bcrypt = require('bcrypt');
//const User = require('../model/user.model');

/**
 * Récupère tous les user 
 */
exports.getAll = (req, res) => {

};

/**
 * Récupère un user par son id
 * @param {string} req.params.id id du user à récupérer
 */
exports.getOne = (req, res) => {

};

/**
 * Inscription
 * @param {string} req.body informations du user à créer
 */
exports.signup = (req, res) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            /* TODO : créer l'utilisateur, avec le hash du password */
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
exports.login = (req, res, next) => {
    /* TODO : trouver l'utilisateur par son email */
    /* TODO : s'il existe on execute le code en dessous*/
    bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            if (!valid) {
                return res.status(401).json({ error: 'incorrect password' });
            }
            /* TODO : le mot de passe est valide, on retourne l'utilisateur */
        })
        .catch(error => res.status(500).json({ error }));
    /* TODO : sinon s'il n'existe pas, on retourne une erreur*/
};

/**
 * Modifie un user par son id
 * @param {string} req.params.id id du user à modifier
 * @param {string} req.body informations du user à modifier
 */
exports.update = (req, res, next) => {

};

/**
 * Supprime un user par son id
 * @param {string} req.params.id id du user à supprimer
 */
exports.delete = (req, res) => {

};