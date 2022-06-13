const {
    queryAsync
} = require('..');

const add = async (region_id, spectacle_id) => {
    console.info(`Adding chair in database async...`);

    const chairs = await queryAsync('INSERT INTO chair (is_reserved, region_id, spectacle_id) VALUES (FALSE, $1, $2) RETURNING *', [region_id, spectacle_id]);
    return chairs[0];
};


const view_room = async () => {
    console.info(`Showing all the chairs from room...`);

    return await queryAsync(`SELECT
                                c.id as chair_id,
                                c.is_reserved as is_reserved,
                                c.phone_nr as phone,
                                r.position as region,
                                s.name as spectacle
                            FROM 
                                chair c
                                    JOIN region r
                                        ON r.id = c.region_id
                                    JOIN spectacle s
                                        ON s.id = c.spectacle_id`);
};

const see_open = async () => {
    console.info(`Showing all the free chairs from room...`);

    return await queryAsync(`SELECT 
                                c.id as chair_id,
                                c.is_reserved as is_reserved,
                                c.phone_nr as phone,
                                r.position as region,
                                s.name as spectacle
                            FROM 
                                chair c
                                    JOIN region r
                                        ON r.id = c.region_id
                                    JOIN spectacle s
                                        ON s.id = c.spectacle_id
                            WHERE c.is_reserved = FALSE`);
};

const get_by_id = async (id) => {
    console.info(`Getting the chair with id ${id} from database...`);

    const chairs = await queryAsync('SELECT * FROM chair WHERE id = $1', [id]);
    return chairs[0];
};

const reserve_id = async (id, phone) => {
    console.info(`Reserving the chair with id ${id}...`);

    const chairs =  await queryAsync('UPDATE chair SET is_reserved = TRUE, phone_nr = $2 WHERE id = $1 RETURNING *', [id, phone]);
    return chairs[0];
};

const unreserve_id = async (id) => {
    console.info(`Unreserving the chair with id ${id}...`);

    const chairs = await queryAsync('UPDATE chair SET is_reserved = FALSE, phone_nr = NULL WHERE id = $1 RETURNING *', [id]);
    return chairs[0];
    
};

const delete_id = async (id) => {
    console.info(`Deleting the chair with id ${id}...`);

    const chairs = await queryAsync('DELETE FROM chair WHERE id = $1 RETURNING *', [id]);
    return chairs[0];
};

module.exports = {
    add,
    view_room,
    see_open,
    get_by_id,
    reserve_id,
    unreserve_id,
    delete_id
}