import PouchDB from './node_modules/pouchdb-react-native'

const REMOTE_DB = 'https//10.42.0.1:5984';

class Chat {
    
    join(user, room, onSync, onFail) {
        this.user = user || 'Anonymous';
        this.room = room.toLowerCase() ||'default';
        this.name = `chat-room-${this.room}`;

        this.db = new PouchDB(dbname);

        return this.db.allDocs({
            include_docs: true,
            descending: true
        }) .then(result => result.rows.map(row => row.doc)
        );
        this.sync = this.db.sync(`${REMOTE_DB}/${dbname}`,{
            live: true,
            retry: true,
            continuous: true
        });
        this.sync.on('change', this.handleChange(onSync));
        this.sync.on('error', this.handleError(onFail));
        
    }

handleChange(callback){
    return e => {
        callback()
    }
}

handleError(callback){
    return e => {
        callback(e);
    }
}
   


sendMessage(message){
    // FIXME : add user, timestamps + return id
    return this.db.post(message);
}


}
export const chatService = new Chat();

