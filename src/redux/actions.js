import { GET_SERVICES, GET_CATEGORIES } from "./actions-types";
import {services} from "../helpers/services";

export const getServices = ()=>{
    return (dispatch)=>{
        const newServices = services.services;
        dispatch({type:GET_SERVICES, payload: newServices});
    };
};

export const getCategories = ()=>{
    return (dispatch)=>{
        const newServices = services.services;
        let categories = [];
        let titleCategories = [];
        let id = 0;
        newServices.map((service)=>{
            if(titleCategories.includes(service.category) === false ){
                categories.push({id: id, category:service.category})
                titleCategories = service.category;
                id++;
            }
        });
        dispatch({type:GET_CATEGORIES, payload: categories})
    };
}