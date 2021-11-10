import { StyleSheet } from 'react-native';
import { RecipeCard } from './AppStyles';

const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
  qty: {
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 8
  },
  addToCart: {
    width: '100%',
    backgroundColor: '#ffcc66',
    height:40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cartText: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'grey'
  }
});

export default styles;
