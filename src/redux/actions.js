import { GET_SERVICES, GET_CATEGORIES, SELECTED_SERVICE, CONFIRM_SERVICE, GET_SLOTS } from "./actions-types";
import {services} from "../helpers/services";
import { slots } from "../helpers/slots";

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
};

export const selectedService = (id)=>{
    return (dispatch)=>{
        dispatch({type:SELECTED_SERVICE, payload: id})
    }
};

export const confirmService = ()=>{
    return (dispatch)=>{
        dispatch({type: CONFIRM_SERVICE, payload: true})
    }
};

export const getSlots = ()=>{
    return (dispatch)=>{
        const newSlots = slots;
        dispatch({type: GET_SLOTS, payload: newSlots})
    }
}
