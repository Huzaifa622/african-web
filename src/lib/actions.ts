import axios from "axios";
import { api } from "./axiosInstance";

export const getCategories = async ( startWith:string ) => {
  try {
    const res = await api.get(`/category?startsWith=${startWith}`);
   
      return res.data.categories;
   
  } catch (error: any) {// eslint-disable-line
    throw new Error(error.message);
  }
};

export const getCities = async (country:string) =>{
  try {
    if(country != ""){
    const res = await axios.post(`https://countriesnow.space/api/v0.1/countries/cities` ,{country});
   console.log(res)
      return res.data.data
    }
    return []
  } catch (error: any) {// eslint-disable-line
    throw new Error(error.message);
  }
}
export const getSubCategories = async ( startWith:string ) => {
  try {
    const res = await api.get(`/sub-category?startsWith=${startWith}`);
   
      return res.data.subCategories;
   
  } catch (error: any) {// eslint-disable-line
    throw new Error(error.message);
  }
};

export const getProviderType = async (page = 0) => {
  try {
    const res = await api.get(`/provider-type?perPage=${page}`);
    return res.data.providerTypes;
  } catch (error: any) {// eslint-disable-line
    throw new Error(error.message);
  }
};
export const getCompanyStatus = async (page = 0) => {
  try {
    const res = await api.get(`/company-status?perPage=${page}`);
    return res.data.companyStatus;
  } catch (error: any) {// eslint-disable-line
    throw new Error(error.message);
  }
};
export const getListing = async (page = 0, catId: string , subCat:string) => {
  try {
    const res = await api.get(`/listing?perPage=${page}&category_id=${catId}&sub_category_id=${subCat}`);
    console.log(res)
    return res.data.listings;
  } catch (error: any) { // eslint-disable-line
    throw new Error(error.message);
  }
};
export const showListing = async (id: string) => {
  try {
    const res = await api.get(`/listing/${id}`);
    // console.log(res)
    return res.data.listing;
  } catch (error: any) {   // eslint-disable-line
    throw new Error(error.message);
  }
};

export const getBlogs = async (name: string) => {
  try {
    const res = await api.get(`/blog?type=${name}`);
    console.log(res.data);
    return res.data.blogs;
  } catch (error: any) {   // eslint-disable-line
    throw new Error(error.message);
  }
};

export const getBlogsById = async (name: string, id: string) => {
  try {
    const res = await api.get(`/blog/${id}?type=${name}`);
    console.log(res.data);
    return res.data.blog;
  } catch (error: any) {   // eslint-disable-line
    throw new Error(error.message);
  }
};

export const getPlans = async () => {
  try {
    const res = await api.get(`/plan`);
    console.log(res.data);
    return res.data.plans;
  } catch (error: any) {   // eslint-disable-line
    throw new Error(error.message);
  }
};
export const checkout = async (data: any) => {// eslint-disable-line
  try {
    const res = await api.post(`/get-checkout-link`, data);
    console.log(res.data);
    return res.data.url;
  } catch (error: any) {   // eslint-disable-line
    throw new Error(error.message);
  }
};
export const saveSubs = async (id: string) => {
  try {
    const res = await api.post(`/save-subscription`, { session_id: id });
    console.log(res.data);
    return res.data.message;
  } catch (error: any) {    // eslint-disable-line
    throw new Error(error.message);
  }
};

//product

export const getProducts = async (page = 0, catId: string, subCat: string) => {
  try {
    const res = await api.get(`/product?perPage=${page}&category_id=${catId}&sub_category_id=${subCat}`);
    console.log(res);
    return res.data.products.data;
  } catch (error: any) {    // eslint-disable-line
    throw new Error(error.message);
  }
};

export const showProduct = async (id: string) => {
  try {
    const res = await api.get(`/product/${id}`);
    // console.log(res)
    return res.data.product;
  } catch (error: any) {   // eslint-disable-line
    throw new Error(error.message);
  }
};
