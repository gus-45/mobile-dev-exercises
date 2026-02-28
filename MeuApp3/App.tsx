import React, { useState } from "react";
import { View, TextInput, Button, Text, ScrollView } from "react-native";

export default function App() {
  const [texto, setTexto] = useState("");
  const [items, setItems] = useState<string[]>([]);

  const adicionarItem = () => {
    setItems([...items, texto]);
    setTexto("");
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Digite um item"
        value={texto}
        onChangeText={setTexto}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <Button title="Adicionar" onPress={adicionarItem} />

      <ScrollView>
        {items.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </ScrollView>
    </View>
  );
}