const express = require('express');
const router = express.Router();
const scoresCtrl = require('../../controllers/scores');

router.get('/', scoresCtrl.highSCores);

router.use(require('../../config/auth'));
router.post('/', checkAuth, scoresCtrl.create);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'NotAuthorized'});
}

module.exports = router;