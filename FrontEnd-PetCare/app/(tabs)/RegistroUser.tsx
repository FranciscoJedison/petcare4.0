import React, { useState } from 'react';
import { View, StyleSheet, Alert, Image } from 'react-native';
import { TextInput, Button, Text, Snackbar } from 'react-native-paper';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import API_URL from '../../conf/api';



type RootStackParamList = {
  Login: undefined;
};

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [visibleSnackbar, setVisibleSnackbar] = useState(false);

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleRegister = async () => {
    if (!name || !email || !password) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios.');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/usuario/inserir`, {
        nome: name,
        email,
        senha: password,
        tipoUsuario: 1,
      });

      if (response.status === 201) {
        setVisibleSnackbar(true);
        setTimeout(() => {
          navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
        }, 1000);
      } else {
        Alert.alert('Erro', response.data.error || 'Não foi possível criar a conta.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      Alert.alert('Erro', 'Falha ao conectar ao servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.transparentBox}>
      <View style={styles.header}>
        <View style={styles.imageWrapper}>
          <Image source={require('../../assets/images/petcare.png')} style={styles.image} />
        </View>
        <Text style={styles.brand}>Pet Care</Text>
      </View>

      <Text style={styles.title}>Criar Conta</Text>

      <TextInput
        label="Nome"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
        style={styles.input}
      />
      <TextInput
        label="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        label="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <Button
        mode="contained"
        onPress={handleRegister}
        style={styles.button}
        loading={loading}
        disabled={loading}
      >
        Cadastrar
      </Button>

      <Snackbar
        visible={visibleSnackbar}
        onDismiss={() => setVisibleSnackbar(false)}
        duration={Snackbar.DURATION_SHORT}
      >
        Conta criada com sucesso!
      </Snackbar>

      <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
        Já tem uma conta? Faça login
      </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#32312F',
  },
  transparentBox: {
  width: '100%',
  backgroundColor: 'rgba(10, 10, 10, 0.4)', // fundo branco transparente
  padding: 20,
  borderRadius: 15,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 0.1,
  borderColor: '#fff',
  borderWidth: 3,
  marginBottom: 20,
  paddingBottom: 30,
},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  imageWrapper: {
    width: 150,
    height: 150,
    borderRadius: 40,
    overflow: 'hidden',
    marginRight: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  brand: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#EBFFF8',
    fontFamily: 'serif',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    width: '100%',
    marginBottom: 15,
  },
  button: {
    width: '100%',
    marginTop: 10,
    backgroundColor: '#00635D',
  },
  link: {
    marginTop: 15,
    textAlign: 'center',
    color: '#00635D',
    fontWeight: 'bold',
  },
});
