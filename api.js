
import axios from 'axios';


const API_BASE_URL = 'http://localhost:8020/shop';

export const listProducts = () => {
    return axios.get(API_BASE_URL+'/all');
}
export const getMenCategories = () => {
    return axios.get(API_BASE_URL+'/'+1+'/children');
}
export const getWomenCategories = () => {
    return axios.get(API_BASE_URL+'/'+2+'/children');
}
export const getCategoriesChildren = (categoryId) => {
    return axios.get(API_BASE_URL+'/'+categoryId+'/children');
}
export const menProducts = () => {
    return axios.get(API_BASE_URL+'/category/'+1);
}
export const womenProducts = () => {
    return axios.get(API_BASE_URL+'/category/'+2);
}
export const listCategories = () => {
    return axios.get(API_BASE_URL+'/categories');
}
export const getProduct = (productId) => {
    return axios.get(API_BASE_URL+'/'+productId);
}
export const getProducts = (categoryId) => {
    return axios.get(API_BASE_URL+'/category/'+categoryId);
}
