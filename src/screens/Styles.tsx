import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,                 // ocupa toda a tela
    backgroundColor: '#f0f0f0', // centraliza horizontalmente
  },
  lista: {
    flex: 1,                 // FlatList ocupa toda altura
    width: '100%',            // FlatList ocupa toda largura
    backgroundColor: '#3c3333ff',
    paddingVertical: 30,
 },
  item: {
    width: '90%',             // cada card ocupa 90% da tela
    padding: 20,
    marginTop: '5%',
    margin:'auto',               // centraliza horizontalmente
    backgroundColor: '#e9bd0bff',
    alignItems: 'center',     // centraliza o conteúdo do card
    borderWidth: 1,
    borderColor: '#f8c007ff',
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    color: '#000',
  },
});
