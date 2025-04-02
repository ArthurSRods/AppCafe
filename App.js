import React from "react";
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useFonts, Inter_400Regular, Inter_600SemiBold } from "@expo-google-fonts/inter"; 

const estabelecimento = {
  nome: "Geno Café",
  descricao: "Um lugar aconchegante para amantes de cafés especiais. Oferecemos grãos selecionados e um ambiente acolhedor.",
  endereco: "Asa Sul CLS 405 bloco B loja 45",
  avaliacao: "4.8 ⭐"
};

const cafe = [
  { id: "1", produto: "Expresso Simples", preco: "R$ 7,00", descricao: "Café puro e intenso, feito sob pressão.", imagem: "https://upload.wikimedia.org/wikipedia/commons/4/45/Espresso1.jpg" },
  { id: "2", produto: "Expresso Duplo", preco: "R$ 9,00", descricao: "O dobro de sabor e intensidade do expresso simples.", imagem: "https://upload.wikimedia.org/wikipedia/commons/9/95/Espresso_doppio.jpg" },
  { id: "3", produto: "Coado", preco: "R$ 10,00", descricao: "Café filtrado lentamente para um sabor equilibrado.", imagem: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Pourover_coffee.jpg" },
  { id: "4", produto: "Cappuccino", preco: "R$ 12,00", descricao: "Café expresso com leite vaporizado e espuma de leite.", imagem: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Cappuccino_at_Sightglass_Coffee.jpg" },
  { id: "5", produto: "Macchiato", preco: "R$ 10,00", descricao: "Expresso com um toque de espuma de leite.", imagem: "https://upload.wikimedia.org/wikipedia/commons/4/45/Macchiato.jpg" },
  { id: "6", produto: "Latte", preco: "R$ 12,00", descricao: "Expresso suave com bastante leite vaporizado.", imagem: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Latte_art.jpg" },
  { id: "7", produto: "Caramel Latte", preco: "R$ 14,00", descricao: "Latte com um toque adocicado de caramelo.", imagem: "https://upload.wikimedia.org/wikipedia/commons/2/21/Caramel_macchiato.jpg" }
];

const pratos = [
  { id: "1", produto: "Porção de Pães de Queijo", preco: "R$ 12,00", descricao: "Seis unidades de pães de queijo crocantes e macios por dentro.", imagem: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Pao_de_queijo.jpg" },
  { id: "2", produto: "Sanduíche de Salame e Rúcula", preco: "R$ 18,00", descricao: "Pão artesanal, salame italiano e rúcula fresca.", imagem: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Salami_sandwich.jpg" },
  { id: "3", produto: "Sanduíche de Rosbife", preco: "R$ 22,00", descricao: "Rosbife artesanal, mostarda dijon e pão crocante.", imagem: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Roast_beef_sandwich.jpg" },
  { id: "4", produto: "Sanduíche de Parma e Búfala", preco: "R$ 24,00", descricao: "Presunto de Parma, queijo búfala e rúcula no pão ciabatta.", imagem: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Parma_sandwich.jpg" },
  { id: "5", produto: "Toast com Ovos", preco: "R$ 16,00", descricao: "Torrada com ovos mexidos cremosos e temperos especiais.", imagem: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Eggs_on_toast.jpg" },
  { id: "6", produto: "Avocado Toast", preco: "R$ 20,00", descricao: "Torrada de pão integral com avocado temperado e ovos pochê.", imagem: "https://upload.wikimedia.org/wikipedia/commons/9/97/Avocado_toast.jpg" }
];

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_600SemiBold });

  if (!fontsLoaded) {
    return <Text>Carregando fontes...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      {/* Botão Voltar */}
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backText}>← Detalhes</Text>
      </TouchableOpacity>

      {/* Imagem do Estabelecimento */}
      <Image source={{ uri: "https://source.unsplash.com/600x300/?cafe" }} style={styles.estabelecimentoImagem} />

      {/* Informações do Estabelecimento */}
      <View style={styles.card}>
        <Text style={styles.titulo}>{estabelecimento.nome}</Text>
        <Text style={styles.descricao}>{estabelecimento.descricao}</Text>
      </View>

      {/* Dados do Estabelecimento */}
      <View style={styles.infoCard}>
        <Text style={styles.infoText}>Endereço: {estabelecimento.endereco}</Text>
        <Text style={styles.infoText}>Avaliação: {estabelecimento.avaliacao}</Text>
      </View>

      {/* Lista de Cafés */}
      <Text style={styles.sectionTitle}>Menu de Cafés</Text>
      <FlatList
        data={cafe}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemCard}>
            <Image source={{ uri: item.imagem }} style={styles.itemImagem} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemNome}>{item.produto}</Text>
              <Text style={styles.itemDescricao}>{item.descricao}</Text>
              <Text style={styles.itemPreco}>{item.preco}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Lista de Pratos */}
      <Text style={styles.sectionTitle}>Menu de Pratos</Text>
      <FlatList
        data={pratos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemCard}>
            <Image source={{ uri: item.imagem }} style={styles.itemImagem} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemNome}>{item.produto}</Text>
              <Text style={styles.itemDescricao}>{item.descricao}</Text>
              <Text style={styles.itemPreco}>{item.preco}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121212", paddingHorizontal: 10 },
  backButton: { marginTop: 20, marginBottom: 10 },
  backText: { fontSize: 18, color: "#BB86FC", fontFamily: "Inter_600SemiBold" },
  estabelecimentoImagem: { width: "100%", height: 200, borderRadius: 10 },
  card: { backgroundColor: "#1E1E1E", padding: 15, marginVertical: 10, borderRadius: 10, elevation: 3 },
  titulo: { fontSize: 22, fontFamily: "Inter_600SemiBold", color: "#fff", marginBottom: 5 },
  descricao: { fontSize: 14, fontFamily: "Inter_400Regular", color: "#bbb" },
  infoCard: { backgroundColor: "#1E1E1E", padding: 15, borderRadius: 10, elevation: 3, marginBottom: 10 },
  infoText: { fontSize: 14, fontFamily: "Inter_400Regular", color: "#bbb" },
  sectionTitle: { fontSize: 18, fontFamily: "Inter_600SemiBold", color: "#fff", marginVertical: 10 },
  itemCard: { flexDirection: "row", alignItems: "center", backgroundColor: "#1E1E1E", padding: 10, borderRadius: 10, marginBottom: 10, elevation: 2 },
  itemImagem: { width: 60, height: 60, borderRadius: 10, marginRight: 10 },
  itemInfo: { flex: 1 },
  itemNome: { fontSize: 16, fontFamily: "Inter_600SemiBold", color: "#fff" },
  itemDescricao: { fontSize: 12, fontFamily: "Inter_400Regular", color: "#bbb", marginBottom: 5 },
  itemPreco: { fontSize: 14, fontFamily: "Inter_600SemiBold", color: "#03DAC6" },
});