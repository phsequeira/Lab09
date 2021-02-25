import request from 'superagent';

const URL = 'https://rocky-falls-52268.herokuapp.com';

export async function getAllRoutes() {
    const data = await request.get(`${URL}/routes`);

    return data.body;
}

export async function getLocation() {
    const data = await request.get(`${URL}/locations`)

    return data.body;
}

export async function getRoute(id) {
    const data = await request.get(`${URL}/routes/${id}`);

    return data.body;
}

export async function newRoute(anewroute) {
    const data = await request.post(`${URL}/routes`)
    .send(anewroute);

    return data.body;
}

export async function updateRoute(id, aroute) {
    const data = await await request.put(`${URL}/routes/${id}`).send(aroute);

    return data.body;
}

export async function deleteRoute(id) {
    const data = await request.delete(`${URL}/routes/${id}`)

    return data.body;
}