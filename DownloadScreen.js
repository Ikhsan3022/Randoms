import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const DownloadScreen = ({ navigation }) => {
  const downloadedMovies = [
    { id: 1, title: 'Downloaded Movie 1', imageUrl: require('./film1.jpg'),description: 'Sinopsis film 1'  },
    { id: 2, title: 'Downloaded Movie 2', imageUrl: require('./film1.jpg'), description: 'Sinopsis film 2' },
    { id: 3, title: 'Downloaded Movie 3', imageUrl: require('./film1.jpg'), description: 'Sinopsis film 3' },
    { id: 4, title: 'Downloaded Movie 4', imageUrl: require('./film1.jpg'), description: 'Sinopsis film 4' },
    { id: 5, title: 'Downloaded Movie 5', imageUrl: require('./film1.jpg'), description: 'Sinopsis film 5' },
    { id: 6, title: 'Downloaded Movie 6', imageUrl: require('./film1.jpg'), description: 'Sinopsis film 6' },
  ];

  const queueMovies = [
    { id: 7, title: 'Queue Movie 1', imageUrl: require('./film1.jpg'), description: 'Sinopsis film 1'  },
    { id: 8, title: 'Queue Movie 2', imageUrl: require('./film1.jpg'), description: 'Sinopsis film 1'  },
    { id: 9, title: 'Queue Movie 3', imageUrl: require('./film1.jpg'), description: 'Sinopsis film 1'  },
  ];

  const recommendedMovies = [
    { id: 10, title: 'Recommended Movie 1', imageUrl: require('./film1.jpg') },
    { id: 11, title: 'Recommended Movie 2', imageUrl: require('./film1.jpg') },
  ];

  const renderMovieItem = ({ item }) => (
    <TouchableOpacity style={styles.movieItem} onPress={() => navigation.navigate('PlayVideo', { movieId: item.id })}>
      <Image source={item.imageUrl} style={styles.movieImage} />
      <Text style={styles.movieTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Downloaded Movies</Text>
      <FlatList
        data={downloadedMovies}
        renderItem={renderMovieItem}
        keyExtractor={(item) => item.id.toString()}
      />

      <Text style={styles.sectionTitle}>Queue Movies</Text>
      <FlatList
        data={queueMovies}
        renderItem={renderMovieItem}
        keyExtractor={(item) => item.id.toString()}
      />

      <Text style={styles.sectionTitle}>Recommended Movies</Text>
      <FlatList
        data={recommendedMovies}
        renderItem={renderMovieItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  movieItem: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  movieImage: {
    width: 80,
    height: 120,
    borderRadius: 8,
    marginRight: 12,
  },
  movieTitle: {
    fontSize: 14,
  },
});

export default DownloadScreen;
