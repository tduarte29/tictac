import axios from "axios";
// chamando a api e importando biblioteca axios por ser mais simples do que fetch nesse cenario
export const api = axios.create({
    baseURL: 'https://digimon-api.vercel.app/api/'
});

export async function getAllDigimon() {
    const {data} = await api.get('digimon');
    return data;
}
