import React from 'react';
import { Text, View } from 'react-native';

export class Chat extends React.Component {

    render()    {
        const { chat } = this.props;
        const { user , room, messages } = chat;
        return (
            <View >
                <Text >Welcom {user} !</Text>
            </View>
        );
    }
}

const mapStateToProps = ({ chat }) => ({ chat });
const connectedChat = connected(mapStateToProps)(Chat);

export { connectedChat as Chat };

