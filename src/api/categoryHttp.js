import http from './axiosHttp';

const getAllCategory=()=>{
    return http.get("category/");
}
const getCategory = (id)=>{
    return http.get(`/category/${id}`);
}
const addCategory=(data)=>{
    return http.post('/category/',data);

}
const updateCategory=(id,data)=>{
     return http.put(`/category/${id}`,data);
}
const deleteCategory=(id)=>{
    return http.delete(`/category/${id}`);
}
export default {
    getAllCategory,
    addCategory,
    updateCategory,
    getCategory
}