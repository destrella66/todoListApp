import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Button,
} from "react-native";
import React from "react";
import "react-native-gesture-handler";

const Starter = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={require("../../assets/gettingStart.png")}
            />
            <Text style={styles.title}>Prepare seu dia com Todo's</Text>
            <Text style={styles.description}>
                A lista de tarefas que facilita seu dia-a-dia, passo-a-passo,
                sem deixar nada para depois.
            </Text>
            <TouchableOpacity
                title="Começar"
                style={styles.button}
                onPress={() => navigation.navigate("SignIn")}
            >
                <Text style={styles.textBtn}>Começar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
        alignItems: "center",
        justifyContent: "center",
        padding: 30,
    },
    img: {
        marginBottom: 40,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 20,
    },
    description: {
        width: "70%",
        textAlign: "center",
        fontSize: 16,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#23b9f2",
        width: "70%",
        paddingHorizontal: 18,
        paddingVertical: 8,
        borderRadius: 8,
    },
    textBtn: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        color: "#fafafa",
    },
});

export default Starter;
