const {
    queryAsync
} = require('..');

const add = async (name, date_time) => {
    console.info(`Adding spectacle in database...`);

    const spectacles = await queryAsync('INSERT INTO spectacle (name, date_time) VALUES ($1, $2) RETURNING *', [name, date_time]);
    return spectacles[0];
};


const view_all = async () => {
    console.info(`Showing all the spectacles...`);

    return await queryAsync('SELECT * FROM spectacle');
};

const see_day = async (date_time) => {
    console.info(`Showing all the spectacles from day ${date_time}...`);

    return await queryAsync('SELECT * FROM spectacle WHERE date_time = $1', [date_time]);
};

const get_by_id = async (id) => {
    console.info(`Getting the spectacle with id ${id} from database...`);

    const spectacles = await queryAsync('SELECT * FROM spectacle WHERE id = $1', [id]);
    return spectacles[0];
};

const update_id = async (id, name, date_time) => {
    console.info(`Update the spectacle with id ${id}...`);

    const spectacles =  await queryAsync('UPDATE spectacle SET name = $2, date_time = $3 WHERE id = $1 RETURNING *', [id, name, date_time]);
    return spectacles[0];
};

const delete_id = async (id) => {
    console.info(`Deleting the spectacle with id ${id}...`);

    const spectacles = await queryAsync('DELETE FROM spectacle WHERE id = $1 RETURNING *', [id]);
    return spectacles[0];
};

module.exports = {
    add,
    view_all,
    see_day,
    get_by_id,
    update_id,
    delete_id
}