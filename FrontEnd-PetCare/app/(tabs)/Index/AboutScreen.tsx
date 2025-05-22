import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';

const AboutScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../../../assets/images/petcare.png')} 
          style={styles.image} 
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Pet Care</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.info}>Fundação: <Text style={styles.highlight}>2020</Text></Text>
          <Text style={styles.info}>Especialidade: <Text style={styles.highlight}>Pet Shop/Clinica Veterinária</Text></Text>
          <Text style={styles.info}>Idiomas: <Text style={styles.highlight}>Português</Text></Text>
          <Text style={styles.info}>Localização: <Text style={styles.highlight}>Brasília, Brasil</Text></Text>
          <Text style={styles.info}>Disponibilidade: <Text style={styles.highlight}>De Segunda a Sexta</Text></Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>Saiba Mais</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>10.000+</Text>
          <Text style={styles.statText}>Pets Cuidando com Carinho</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>500+</Text>
          <Text style={styles.statText}>Consultas e Procedimentos Mensais</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>99.5%+</Text>
          <Text style={styles.statText}>Eficiência nos Diagnósticos</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>15+</Text>
          <Text style={styles.statText}>Serviços para o Bem-estar do seu Pet</Text>
        </View>
      </View>

      {/* Modal de Saiba Mais */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Sobre a Pet Care</Text>
            <Text style={styles.modalDescription}>
            Na Pet Care, acreditamos que todo pet merece cuidados de qualidade, carinho e atenção especial. Fundada em 2018, nossa clínica veterinária e pet shop foi criada com o compromisso de oferecer serviços completos para a saúde e bem-estar do seu melhor amigo.
            Contamos com uma equipe de profissionais apaixonados por animais, prontos para oferecer atendimento personalizado e tratamentos de excelência. Nossa missão é garantir que cada pet receba o melhor cuidado possível, com conforto e segurança.
            </Text>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#32312F', // Cor de Fundo
    alignItems: 'center',
    minHeight: '100%', // Garantir que a tela ocupe toda a altura
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 100, // Borda arredondada
  },
  content: {
    alignItems: 'center',
    flex: 1, // Permite o conteúdo ocupar o espaço restante
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#EBFFF8',
    textAlign: 'center',
    marginBottom: 10,
  },
  infoContainer: {
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  highlight: {
    fontWeight: 'bold',
    color: '#A9B5DB',
  },
  button: {
    backgroundColor: '#00635D', //
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%', // Para garantir que os elementos se ajustem bem
  },
  statBox: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
    width: '45%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 2 },
    elevation: 2,
  },
  statNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0A6963',
  },
  statText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
  },
  // Estilos do Modal
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semitransparente
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    maxHeight: '80%', // Limita a altura do modal
    overflow: 'scroll', // Caso o conteúdo ultrapasse o limite, permite rolar
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#8B4513', // Marrom escuro
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AboutScreen;
