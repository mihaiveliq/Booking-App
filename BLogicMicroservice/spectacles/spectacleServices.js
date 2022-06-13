const {
    sendRequest
} = require('./http-client');

const add = async (name, date_time) => {
    console.info(`Sending request to IO to add a spectacle ${name} for ${date_time} ...`);

    const options = {
        url: `http://${process.env.IO_SERVICE_API_ROUTE}/spectacles`,
        method: 'POST',
        data: {
            name,
            date_time
        }
    }

    const id = await sendRequest(options);

    return id;
};

const view_all = async() => {
    console.info(`Sending request to IO for all spectacles ...`);

    const options = {
        url: `http://${process.env.IO_SERVICE_API_ROUTE}/spectacles`
    }

    const spectacles = await sendRequest(options);

    return spectacles;
};

const see_day = async (date_time) => {
    console.info(`Sending request to IO for all spectacles in ${date_time} ...`);

    const options = {
        url: `http://${process.env.IO_SERVICE_API_ROUTE}/spectacles/date`
    }

    const date_spectacles = await sendRequest(options);

    return date_spectacles;
};

const get_by_id = async (id) => {
    console.info(`Sending request to IO for spectacle ${id} ...`);

    const options = {
        url: `http://${process.env.IO_SERVICE_API_ROUTE}/spectacles/${id}`
    }

    const spectacle = await sendRequest(options);

    return spectacle;
};

const update_id = async (id, name, date_time) => {
    console.info(`Sending request to IO to update spectacle form id=${id} with ${name} at ${date_time} ...`);

    const options = {
        url: `http://${process.env.IO_SERVICE_API_ROUTE}/spectacles/${id}`,
        method: 'PUT',
        data: {
            name,
            date_time
        }
    }

    const id = await sendRequest(options);

    return id;
;}

const delete_id = async (id) => {
    console.info(`Sending request to IO to delete spectacle from id=${id} ...`);

    const options = {
        url: `http://${process.env.IO_SERVICE_API_ROUTE}/spectacles/${id}`,
        method: 'DELETE'
    }

    const id = await sendRequest(options);

    return id;
};

module.exports = {
    add,
    view_all,
    see_day,
    get_by_id,
    update_id,
    delete_id
}
