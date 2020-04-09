import React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

export class Home extends React.Component {

 state = {
     user:''
 }

render() {
    const { user } = this.state;
    return(
        <View>
            <TextInput
                value={user}
                placeholder="Leave blank for anonymous"
                onChangeText={(user) => this.setState({ user })}
                />
            <Button
             title = "Let's Chat !"
             onPress={() => {
                 Actions.chat();
             }}
            />
        </View>
    )
}

}