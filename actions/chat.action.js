import { chatService } from '../services';

export const chatAction = {
    join
}

function join(user,room){
    return dispatch => {
        dispatch(request(user, room));

        chatService.join(user, room,
            messages => dispatch(syncSuccess(messages)),
            error => dispatch(syncFailure(error))
        ).then(
            messages => dispatch(success(messages)),
            error => dispatch(failure(error))
    );
};


function sendMessage(message){
    return dispatch => {
        dispatch(request(message));

        chatService.sendMessage(message).then(
            message => dispatch(success(message)),
            error => dispatch(failure(error))
        );
    };

}


function request(user, room) {return { type: 'JOIN_REQUEST', user, room } }
function success(messages) {return { type: 'JOIN_SUCCESS', messages } }
function failure(error) {return { type: 'FAILURE', error } } 
function syncFailure(error) {return { type: 'SYNC_FAILURE', error } }
function syncSuccess(messages) { return { type: 'SYNC_SUCCESS', messages } }



}
