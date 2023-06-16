const mongodb = require('../db/connection');
const ObjectId = require('mongodb').ObjectId;

const homeroute = (req, res) => {
    res.send("Alan Lamoreaux");
};

const anotherpersonroute = (req, res) => {
    res.send("Amy Lamoreaux");
};

const getAll = async (req, res, next) => {
    const result = await mongodb.getDb().db().collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

const getSingle = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
        .getDb()
        .db()
        .collection('contacts')
        .find({
            _id: userId
        });
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

module.exports = {
    homeroute,
    anotherpersonroute,
    getAll,
    getSingle
};