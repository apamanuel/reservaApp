import { GET_SERVICES, GET_CATEGORIES, SELECTED_SERVICE} from "./actions-types";

const initialState = {
    services:[],
    categories:[],
    selectedService:''
};

const rootReducer=(state=initialState, action)=>{
    switch(action.type){
        case GET_SERVICES:
            return {...state, services:action.payload};
        case GET_CATEGORIES:
            return {...state, categories:action.payload};
        case SELECTED_SERVICE:
            return {...state, selectedService:action.payload};
        default:
            return {...state};
    }
};

export default rootReducer;