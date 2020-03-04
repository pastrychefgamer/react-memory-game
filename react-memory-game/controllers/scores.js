let Score = require('../models/score');

module.exports = {
    create,
    highScores
};

async function create(rea, res) {
    try {
        await Score.create(req.body);
        highScores(req, res);
    } catch (error) {
        res.json({error});
    }
}

async function highScores(req, res) {
    const scores = await Score.find({})
    .sort({seconds: 1})
    .limit(req.query.limit || 20);
    res.json(scores);
}