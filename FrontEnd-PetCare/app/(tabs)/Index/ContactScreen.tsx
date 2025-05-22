import React from "react";
import { View, Text, TextInput, TouchableOpacity, Linking, ScrollView } from "react-native";

const ContactScreen = () => {
    return (
        <ScrollView style={{ padding: 20, backgroundColor: "#32312F" }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 }}>
            <Text style={{ color: "#EBFFF8" }}>Pet Care</Text>
            </Text>

            <View style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold", color:"white" }}>Fale conosco</Text>
                <Text style={{ fontSize: 16, color: "white", marginTop: 5 }}>
                    Entre em contato para mais informações sobre nossos serviços de cuidados aos animais.
                </Text>
            </View>

            <View style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color:"white" }}>Phone:</Text>
                <Text style={{ fontSize: 16, color:"white" }}>+123-456-789</Text>
                <Text style={{ fontSize: 16, color:"white" }}>+111-222-333</Text>
            </View>

            <View style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color:"white" }}>Email:</Text>
                <Text style={{ fontSize: 16, color:"white" }}>info@PetCareVeterinário.com</Text>
                <Text style={{ fontSize: 16, color:"white" }}>appointments@PetCareVeterinário.com</Text>
            </View>

            <View style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color:"white" }}>Instagram:</Text>
                <Text style={{ fontSize: 16, color: "cyan" }} onPress={() => Linking.openURL("https://www.instagram.com/PetCare")}>https://www.instagram.com/PetCare</Text>
            </View>

            <View style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color:"white" }}>Facebook:</Text>
                <Text style={{ fontSize: 16, color: "cyan" }} onPress={() => Linking.openURL("https://www.facebook.com/PetCare")}>https://www.facebook.com/PetCare</Text>
            </View>

            
            <TextInput style={{color:"white", borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5}}placeholderTextColor="white" placeholder="Nome" />
            <TextInput style={{color:"white", borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5}}placeholderTextColor="white" placeholder="Email" keyboardType="email-address" />
            <TextInput style={{color:"white", borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5}}placeholderTextColor="white" placeholder="Assunto" />
            <TextInput style={{color:"white", borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5, height: 100, textAlignVertical: "top" }}placeholderTextColor="white" placeholder="Mensagem" multiline />


            <TouchableOpacity style={{ backgroundColor: "#0A6963", padding: 15, borderRadius: 5, alignItems: "center" }}>
                <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>Enviar mensagem</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default ContactScreen;
