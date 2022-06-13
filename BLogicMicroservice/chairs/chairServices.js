const {
    sendRequest
} = require('./../http-client');

const addChair = async (region_id, spectacle_id) => {
    console.info(`Send request to IO to insert chair...`);
    
    const addRequest = {
        url: `http://${process.env.IO_SERVICE_API_ROUTE}/chairs`,
        method: "POST",
        data: {
            region_id,
            spectacle_id
        }
    }

    const chair = await sendRequest(addRequest);

    return chair;
};

const viewRoom = async () => {
    console.info(`Sending request to IO for all chairs...`);

    const viewRequest = {
        url: `http://${process.env.IO_SERVICE_API_ROUTE}/chairs`
    };

    const room = await sendRequest(viewRequest);

    return room;
};

const getFreeChairs = async () => {
    console.info(`Sending request to IO to get free chairs...`);

    const freeChairsRequest = {
        url: `http://${process.env.IO_SERVICE_API_ROUTE}/chairs/free_spaces`
    }

    const free = await sendRequest(freeChairsRequest);

    return free;
};

const getChairById = async (id) => {
    console.info(`Sending request to IO for chair ${id}...`);

    const chairRequest = {
        url: `http://${process.env.IO_SERVICE_API_ROUTE}/chairs/${id}`
    }

    const chair = await sendRequest(chairRequest);

    return chair;
};

const reserveChair = async (id, phone_nr) => {
    console.info(`Sending request to IO for reserve chair...`);

    const reserveRequest = {
        url: `http://${process.env.IO_SERVICE_API_ROUTE}/chairs/reserve/${id}`,
        method: "PUT",
        data: {
            phone_nr
        }
    }

    const reserve = await sendRequest(reserveRequest);

    return reserve;
};

const unreserveChair = async (id) => {
    console.info(`Sending request to IO for unreserve chair...`);

    const unreserveRequest = {
        url: `http://${process.env.IO_SERVICE_API_ROUTE}/chairs/unreserve/${id}`,
        method: "PUT"
    }

    const unreserve = await sendRequest(unreserveRequest);

    return unreserve;
};

const deleteChair = async (id) => {
    console.info(`Sending request to IO for delete chair...`);

    const deleteRequest = {
        url: `http://${process.env.IO_SERVICE_API_ROUTE}/chairs/${id}`,
        method: "DELETE"
    }

    const my_del = await sendRequest(deleteRequest);

    return my_del;
};

module.exports = {
    addChair,
    viewRoom,
    getFreeChairs,
    getChairById,
    reserveChair,
    unreserveChair,
    deleteChair
}
