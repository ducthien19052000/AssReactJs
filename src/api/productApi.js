import http from './axiosHttp'

const getAll=() =>{
    return http.get("product/");
}
const getProduct= id=>{
    return http.get(`product/${id}`);
}
const createProduct = data=>{
    return http.post("product/",data);
}
const updateProduct = (id,data)=>{
    return http.put(`product/${id}`,data);
}
const removeProduct = id =>{
    return http.delete(`product/${id}`);
};
const getProductCategory = id =>{
    return http.get(`product/category/${id}`);
};

export default {
    getAll,
    getProduct,
    createProduct,
    updateProduct,
    removeProduct,
    getProductCategory
}