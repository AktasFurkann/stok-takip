import axios from 'axios'

export const urunleriGetir = async () => {
    const { data } = await axios.get('http://localhost:4000/api/urunler')

    return data;
}
export const stoklarGetir = async () => {
    const { data } = await axios.get('http://localhost:4000/api/stoklar')

    return data;
}

export const urunGetir = async (id) => {
    const { data } = await axios.get(`http://localhost:4000/api/urunler/${id}`)

    return data;
}
export const stokUrun = async (id) => {
    const { data } = await axios.get(`http://localhost:4000/api/urunler/stok/${id}`)

    return data;
}
export const stokGetir = async (id) => {
    console.log(id);
    const { data } = await axios.get(`http://localhost:4000/api/stoklar/${id}`)

    return data;
}
export const urunEkle = async (input) => {
    const { data } = await axios.post('http://localhost:4000/api/urunler', input)

    return data
}
export const stokEkle = async (input) => {
    const { data } = await axios.post('http://localhost:4000/api/stoklar', input)

    return data
}
export const urunDuzenle = async (input, id) => {
    const { data } = await axios.patch(`http://localhost:4000/api/urunler/${id}`, input)

    return data
}
export const stokDuzenle = async (input, id) => {
    const { data } = await axios.patch(`http://localhost:4000/api/stoklar/${id}`, input)

    return data
}
export const urunuSil = async (id) => {
    const { data } = await axios.delete(`http://localhost:4000/api/urunler/${id}`);

    return data
}
export const stokSil = async (id) => {
    const { data } = await axios.delete(`http://localhost:4000/api/stoklar/${id}`);

    return data
}