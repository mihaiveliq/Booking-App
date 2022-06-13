const Router = require('express').Router();

const {
    add,
    view_all,
    see_day,
    get_by_id,
    update_id,
    delete_id
} = require('./SpectaclesRepo.js');

Router.post ('/', async (req, res) => {

    const {
        name,
        date_time
    } = req.body;

    const spectacle = await add(name, date_time);
    res.json(spectacle);
});

Router.get('/', async(req, res) => {

    const all_spectacles = await view_all();

    res.json(all_spectacles);

});

Router.get('/date', async(req, res) => {

    const {
        date
    } = req.body;

    const day_spectacles = await see_day(date);

    res.json(day_spectacles);

});

Router.get('/:id', async(req, res) => {

    const {
        id
    } = req.params;

    const spectacle = await get_by_id(id);

    res.json(spectacle);

});

Router.put('/:id', async(req, res) => {

    const {
        id
    } = req.params;

    const {
        name,
        date_time
    } = req.body;

    const spectacle = await update_id(id, name, date_time);

    res.json(spectacle);

});

Router.delete('/:id', async(req, res) => {

    const {
        id
    } = req.params;

    const deleted_spectacle = await delete_id(id);

    res.json(deleted_spectacle);

});