const Router = require('express').Router();

const { ServerError } = require('../errors');

const ChairServices = require('./chairServices.js');

Router.get('/', async (req, res) => {
    
    const room = await ChairServices.viewRoom();

    res.json(room);
});

Router.get('/free_spaces', async (req, res) => {

    const free_sp = await ChairServices.getFreeChairs();

    res.json(free_sp);
});

Router.get('/:id', async (req, res) => {

    const {
        id
    } = req.params;

    const chair = await ChairServices.getChairById(id);

    res.json(chair);
});

Router.post('/', async (req, res) => {

    const {
        region_id,
        spectacle_id
    } = req.body;

    if (!region_id) {
        throw new ServerError('No region provided!', 400);
    }

    if (!spectacle_id) {
        throw new ServerError('No spectacle provided!', 400);
    }

    const chair = await ChairServices.addChair(region_id, spectacle_id);

    res.json(chair);
});

Router.put('/reserve/:id', async (req, res) => {

    const {
        id
    } = req.params;

    const {
        phone_nr
    } = req.body;

    if (!phone_nr) {
        throw new ServerError('No phone_nr provided!', 400);
    }

    const reserve = await ChairServices.reserveChair(id, phone_nr);

    res.json(reserve);
});

Router.put('/unreserve/:id', async (req, res) => {

    const {
        id
    } = req.params;

    const unreserve = await ChairServices.unreserveChair(id);

    res.json(unreserve);
});

Router.delete('/:id', async (req, res) => {
    const {
        id
    } = req.params;

    const del_ch = await ChairServices.deleteChair(id);

    res.json(del_ch);
});

module.exports = Router;