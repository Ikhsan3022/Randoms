import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

const CategoryScreen = ({ navigation }) => {
  const categories = [
    { id: 1, title: 'Crime/Drama', movies: [
      { id: 1, title: 'Film 1', imageUrl: require('./film1.jpg') },
      { id: 2, title: 'Film 2', imageUrl: require('./film2.jpg') },
      { id: 3, title: 'Film 3', imageUrl: require('./film3.jpg') },
    ] },
    { id: 2, title: 'Action', movies: [
      { id: 4, title: 'Film 4', imageUrl: require('./film4.jpg') },
      { id: 5, title: 'Film 5', imageUrl: require('./film5.jpg') },
      { id: 6, title: 'Film 6', imageUrl: require('./film6.jpg') },
    ] },
    { id: 3, title: 'Fantasy', movies: [
      { id: 7, title: 'Film 7', imageUrl: require('./film7.jpg') },
      { id: 8, title: 'Film 8', imageUrl: require('./film8.jpg') },
      { id: 9, title: 'Film 9', imageUrl: require('./film9.jpg') },
    ] },
    { id: 4, title: 'Horror', movies: [
      { id: 10, title: 'Film 10', imageUrl: require('./film10.jpg') },
      { id: 11, title: 'Film 11', imageUrl: require('./film11.jpg') },
      { id: 12, title: 'Film 12', imageUrl: require('./film12.jpg') },
    ] },
    { id: 5, title: 'Thriller', movies: [
      { id: 13, title: 'Film 13', imageUrl: require('./film13.jpg') },
      { id: 14, title: 'Film 14', imageUrl: require('./film14.jpg') },
      { id: 15, title: 'Film 15', imageUrl: require('./film15.jpg') },
    ] },
    { id: 6, title: 'Sci-Fi', movies: [
      { id: 16, title: 'Film 16', imageUrl: require('./film16.jpg') },
      { id: 17, title: 'Film 17', imageUrl: require('./film17.jpg') },
      { id: 18, title: 'Film 18', imageUrl: require('./film18.jpg') },
    ] },
    { id: 7, title: 'Disney', movies: [
      { id: 19, title: 'Film 19', imageUrl: require('./film19.jpg') },
      { id: 20, title: 'Film 20', imageUrl: require('./film20.jpg') },
      { id: 21, title: 'Film 21', imageUrl: require('./film21.jpg') },
    ] },
    { id: 8, title: 'Hollywood', movies: [
      { id: 22, title: 'Film 22', imageUrl: require('./film22.jpg') },
      { id: 23, title: 'Film 23', imageUrl: require('./film23.jpg') },
      { id: 24, title: 'Film 24', imageUrl: require('./film24.jpg') },
    ] },
  ];

  const renderCategoryItem = ({ item }) => (
    <View style={styles.categoryItem}>
      <Text style={styles.categoryTitle}>{item.title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {item.movies.map((movie) => (
          <TouchableOpacity style={styles.movieItem} key={movie.id}>
            <Image source={movie.imageUrl} style={styles.movieImage} />
            <Text style={styles.movieTitle}>{movie.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>MovieVerse</Text>
      </View>

      {/* Category List */}
      <ScrollView contentContainerStyle={styles.categoryListContainer}>
        {categories.map((category) => (
          <View style={styles.categoryList} key={category.id}>
            {renderCategoryItem({ item: category })}
          </View>
        ))}
      </ScrollView>

      {/* Navbar Fitur */}
      <View style={styles.featureNavbar}>
        <TouchableOpacity style={styles.navbarItem} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navbarItemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarItem}>
          <Text style={styles.navbarItemText}>Kategori</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarItem} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.navbarItemText}>Profil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarItem} onPress={() => navigation.navigate('Download')}>
          <Text style={styles.navbarItemText}>Download</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  navbar: {
    backgroundColor: '#e50914',
    paddingVertical: 16,
    paddingHorizontal: 20,
    opacity: 0.5,
  },
  navbarTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  categoryListContainer: {
    paddingVertical: 16,
  },
  categoryList: {
    marginBottom: 16,
  },
  categoryItem: {
    paddingHorizontal: 8,
    marginBottom: 4,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  movieItem: {
    width: windowWidth / 3 - 20,
    marginRight: 8,
    marginBottom: 0,
  },
  movieImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  movieTitle: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  featureNavbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FF3F4E',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: '#ccc',
    elevation: 5,
  },
  navbarItem: {
    alignItems: 'center',
  },
  navbarItemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default CategoryScreen;
