import React, { useState } from "react";
import { View, TextInput, Text, Button, Alert, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function EntradaTexto() {
  const [nome, setNome] = useState("");

  const mostrarAlerta = () => {
    Alert.alert("Nome digitado", nome);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Digite seu nome:</Text>

        <TextInput
          style={styles.input}
          placeholder="Seu nome"
          value={nome}
          onChangeText={setNome}
        />

        <Text>Sua entrada: {nome}</Text>

        <Button title="Clique aqui" onPress={mostrarAlerta} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderColor: "#aaa",
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 8,
  },
});