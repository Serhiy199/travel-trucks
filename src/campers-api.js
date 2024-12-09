import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const getCampers = async () => {
    const response = await axios.get('/campers');
    console.log(response.data.items);

    return response.data.items;
};

export async function CamperId(id) {
    const response = await axios.get(`/campers/${id}`);
    // console.log(response.data);
    return response.data;
}
