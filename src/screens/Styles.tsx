import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,                 
    backgroundColor: '#f0f0f0', 
  },
  lista: {
    flex: 1,                
    width: '100%',           
    backgroundColor: '#87CEEB',
    paddingVertical: 30,
 },
  item: {
    width: '20%',            
    padding: 20,
    marginTop: '5%',
    margin:'auto',              
    backgroundColor: '#90EE90',
    alignItems: 'center',     
    borderWidth: 1,
    borderColor: '#f8c007ff',
    borderRadius: 30,
  },
  text: {
    fontSize: 18,
    color: '#000',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
    color: '#000',
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
    resizeMode: 'contain',
  },
});
