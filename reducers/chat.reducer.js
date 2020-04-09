import { Actions } from "react-native-router-flux";

const initState = {
    messages : [],
    user: null,
    room : null
}

export default function (state=initState, action){

    console.log(action);

    switch(action.type) {

        case 'JOIN_REQUEST':
            return {
                ...state,
                room: action.room,
                user: action.user

            };
        case 'JOIN_SUCCESS':
            return{
                ...state,
                messages: actions.messages
            };
        case 'FAILURE':
            console.error(action.error);
        case 'SEND_MESSAGE_REQUEST':
            return {...state };
        case 'SEND_MESSAGE_SUCCESS':
            return {...state };
        case 'SEND_MESSAGE_FAILURE':
            return {... state };
        case 'SYNC_SUCCESS':
            return {...state };
        case 'SYNC_FAILURE':
            return { ...state};
        default:
            return state;
    }
}