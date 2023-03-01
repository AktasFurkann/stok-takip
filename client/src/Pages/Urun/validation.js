import * as yup from 'yup';

const validation = yup.object().shape({
    cinsi: yup.string().required("Doldurulması zorunlu alan (örn: Şeker)"),
    birimi: yup.string().required("Doldurulması zorunlu alan (örn: Kg)"),
    grubu: yup.string().required("Doldurulması zorunlu alan (örn: Toz Şeker)"),
    fiyat: yup.string().required("Doldurulması zorunlu alan (örn: 1000)")
})

export default validation