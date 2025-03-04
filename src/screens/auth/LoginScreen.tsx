import React from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
            />

            <Button title="Login" onPress={() => {}} />

            <TouchableOpacity>
                <Text style={styles.link}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={styles.signUpContainer}>
                <Text>Don't have an account?</Text>
                <TouchableOpacity>
                    <Text style={styles.link}>Sign Up</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.googleSignInContainer}>
                <Text>Or sign in with</Text>
                <Button title="Google" onPress={() => {}} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
        borderRadius: 8,
    },
    link: {
        color: '#007BFF',
        textAlign: 'center',
        marginVertical: 8,
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    googleSignInContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
});

export default LoginScreen;
