const Router = require('express').Router();

const ChairRepo = require('./ChairRepo.js');

Router.get('/', async (req, res) => {

    const room = await ChairRepo.view_room();

    res.json(room);
});

Router.get('/free_spaces', async (req, res) => {

    const free = await ChairRepo.see_open();

    res.json(free);
});

Router.get('/:id', async (req, res) => {

    const {
        id
    } = req.params;

    const chair = await ChairRepo.get_by_id(id);

    res.json(chair);
});

Router.post('/', async (req, res) => {

    const {
        region_id,
        spectacle_id
    } = req.body;

    const chair = await ChairRepo.add(region_id, spectacle_id);

    res.json(chair);
});

Router.put('/reserve/:id', async (req, res) => {

    const {
        id
    } = req.params;

    const {
        phone_nr
    } = req.body;

    const reserve = await ChairRepo.reserve_id(id, phone_nr);

    res.json(reserve);
});

Router.put('/unreserve/:id', async (req, res) => {

    const {
        id
    } = req.params;

    const unreserve = await ChairRepo.unreserve_id(id);

    res.json(unreserve);
});

Router.delete('/:id', async (req, res) => {
    const {
        id
    } = req.params;

    const del_chair = await ChairRepo.delete_id(id);

    res.json(del_chair);
});

module.exports = Router;
