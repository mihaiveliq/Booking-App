const Router = require('express').Router();

const {
    ServerError
} = require('../errors');

const {
    add,
    view_all,
    see_day,
    get_by_id,
    update_id,
    delete_id
} = require('../spectacles/spectacleServices.js');

Router.post('/', async (req, res) => {

    const {
        name,
        date_time
    } = req.body;

    if (!name) {
        throw new ServerError('No name provided!', 400);
    }

    if (!date_time) {
        throw new ServerError('No date provided!', 400);
    }

    const id = await add(name, date_time);

    res.json(id);
});

Router.get('/', async (req, res) => {

    const all_spectacles = await view_all();

    res.json(all_spectacles);
});

Router.get('/date', async (req, res) => {

    const {
        date_time
    } = req.body;

    if (!date_time) {
        throw new ServerError('No date provided!', 400);
    }

    const spectacles = await see_day(date_time);

    res.json(spectacles);
});

Router.get('/:id', async (req, res) => {

    const {
        id
    } = req.params;

    const spectacle = await get_by_id(id);

    res.json(spectacle);
});

Router.put('/:id', async (req, res) => {

    const {
        id
    } = req.params;

    const {
        name,
        date_time
    } = req.body;

    if (!name) {
        throw new ServerError('No name provided!', 400);
    }

    if (!date_time) {
        throw new ServerError('No date provided!', 400);
    }

    const spectacle = await update_id(id, name, date_time);

    res.json(spectacle);
});

Router.delete('/:id', async (req,res) => {

    const {
        id
    } = req.params;

    const spectacle = await delete_id(id);

    res.json(spectacle);
});

module.exports = Router;
