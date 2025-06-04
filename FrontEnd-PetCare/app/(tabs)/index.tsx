import React, { useState, useEffect } from 'react';
import { Animated, StyleSheet, View, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';   

export default function HomeScreen() {
  const [typingText, setTypingText] = useState('');
  const [fadeAnim] = useState(new Animated.Value(0)); // Inicializa a animação de opacidade
  const [imageAnim] = useState(new Animated.Value(0)); // Inicializa a animação de escala da imagem

  useEffect(() => {
    // Função para limpar o AsyncStorage ao reiniciar a aplicação
    const clearStorage = async () => {
      try {
        await AsyncStorage.clear(); // Limpa todos os dados armazenados
        console.log('AsyncStorage limpo com sucesso!');
      } catch (error) {
        console.error('Erro ao limpar o AsyncStorage:', error);
      }
    };

    // Lógica para mostrar o texto dinâmico
    const typeStrings = [
      'Cuidados completos para o seu pet',
      'Atendimento veterinário com carinho e qualidade',
      'Serviços especializados para saúde e bem-estar animal',
      'A melhor experiência para você e seu pet',
      'Tudo o que seu pet precisa em um só lugar',
      'Amor e cuidado para seu pet',
    ];

    let index = 0;
    const typeInterval = setInterval(() => {
      setTypingText(typeStrings[index]);
      index = (index + 1) % typeStrings.length;
    }, 3000);

    return () => clearInterval(typeInterval); // Limpa o intervalo ao desmontar
  }, []);

  useEffect(() => {
    // Animação sincronizada de fade-in e zoom-in
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(imageAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);


  return (
    <LinearGradient
      colors={['#0f0f0f', '#424242']}
      style={styles.container}>
    <View style={styles.container}>
      {/* Imagem com animação de fade e zoom */}
      <Animated.View
        style={[
          styles.imageWrapper,
          { opacity: imageAnim, transform: [{ scale: imageAnim }] },
        ]}
      >
        <Image
          source={require('../../assets/images/petcare.png')}
          style={styles.image}
        />
      </Animated.View>

      {/* Texto abaixo com animação de fade */}
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={styles.title}>Bem-vindo à Pet Care!</Text>
        <Text style={styles.subtitle}>
          Nós Somos Especialistas em <Text style={styles.typingText}>{typingText}</Text>
        </Text>

        {/* Texto "Sobre Nós" */}
        
      </Animated.View>
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', //Alinhamento do conteúdo
    alignItems: 'center', //Alinhamento dos itens
    //backgroundColor: '#32312F', // Cor de fundo
  },
  imageWrapper: {
    width: 200,
    height: 200,
    borderRadius: 100, // Torna a View circular
    overflow: 'hidden', // Garante que a imagem siga o formato
    transform: [{ scaleX: 1.2 }, { scaleY: 0.9 }], // Distorce para imitar o efeito do CSS
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Funciona no React Native 0.71+
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32, // Aumentei o tamanho do título
    fontWeight: 'bold',
    color: '#EBFFF8',
    textAlign: 'center',
    marginBottom: 10, // Adicionei mais espaço abaixo do título
  },
  subtitle: {
    fontSize: 28, // Aumentei o tamanho do subtítulo
    fontWeight: '600',
    marginTop: 5,
    textAlign: 'center',
    color: '#A0AAB2',
  },
  typingText: {
    color: '#A9B5DB',
    fontWeight: 'bold',
    fontSize: 36, // Aumentei a fonte do texto dinâmico para mais destaque
  },
  aboutText: {
    fontSize: 18, // Aumentei um pouco o tamanho do texto sobre a clínica
    fontWeight: '400',
    color: '#333',
    marginTop: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
