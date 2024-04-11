import { GET_SERVICES, GET_CATEGORIES} from "./actions-types";

const initialState = {
    services:[],
    categories:[]
};

const rootReducer=(state=initialState, action)=>{
    switch(action.type){
        case GET_SERVICES:
            return {...state, services:action.payload};
        case GET_CATEGORIES:
            return {...state, categories:action.payload};
        default:
            return {...state};
    }
};

export default rootReducer;