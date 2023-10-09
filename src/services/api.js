import axios from "axios";

export const api = axios.create({
    baseURL: 'https://digimon-api.vercel.app/api/'
});

export async function getAllDigimon() {
    const {data} = await api.get('digimon');
    return data;
}