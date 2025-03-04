import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ForgotPasswordScreen = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
            />
            <Button title="Reset Password" onPress={() => {}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
        borderRadius: 8,
    },
});

export default ForgotPasswordScreen;
