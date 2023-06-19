import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const KategoriBtn = ({ navigation }) => {
  navigation.navigate('Category');
};

const ProfileBtn = ({ navigation }) => {
  navigation.navigate('Profile');
};

const HomeScreen = ({ navigation }) => {
  const movies = [
    { id: 1, title: 'Movie 1', imageUrl: require('./movie1.jpg'), videoId: 'abc123', videoTitle: 'Video 1' },
    { id: 2, title: 'Movie 2', imageUrl: require('./movie2.jpg'), videoId: 'def456', videoTitle: 'Video 2' },
    { id: 3, title: 'Movie 3', imageUrl: require('./movie3.jpg'), videoId: 'ghi789', videoTitle: 'Video 3' },
    // Tambahkan film lainnya sesuai kebutuhan
  ];
  const movies1 = [
    { id: 1, title: 'Movie 1', imageUrl: require('./movie1.jpg'), videoId: 'abc123', videoTitle: 'Video 1' },
    { id: 2, title: 'Movie 2', imageUrl: require('./movie2.jpg'), videoId: 'def456', videoTitle: 'Video 2' },
    { id: 3, title: 'Movie 3', imageUrl: require('./movie3.jpg'), videoId: 'ghi789', videoTitle: 'Video 3' },
    // Tambahkan film lainnya sesuai kebutuhan
  ];

  const renderMovieItem = ({ item }) => (
    <TouchableOpacity style={styles.movieItem} onPress={() => handleMoviePress(item)}>
      <Image source={item.imageUrl} style={styles.movieImage} />
      <Text style={styles.movieTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const handleMoviePress = (item) => {
    navigation.navigate('PlayVideo', { videoId: item.videoId, videoTitle: item.videoTitle });
  };

  const goToCategoryScreen = () => {
    navigation.navigate('Category');
  };

  const GoDownloadScreen = () => {
    navigation.navigate('Download');
  };
  const goToProfileScreen = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>MovieVerse</Text>
      </View>

      {/* Cover Film Besar */}
      <View style={styles.bigCover}>
        <Image source={require('./bigCover.jpg')} style={styles.bigCoverImage} />
      </View>

      {/* Daftar Film Kecil */}
      <ScrollView contentContainerStyle={styles.movieListContainer}>
        <View style={styles.movieList}>
          {movies.map((movie) => (
            <TouchableOpacity style={styles.movieItem} key={movie.id} onPress={() => handleMoviePress(movie)}>
              <Image source={movie.imageUrl} style={styles.movieImage} />
              <Text style={styles.movieTitle}>{movie.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.movieList}>
          {movies1.map((movie) => (
            <TouchableOpacity style={styles.movieItem} key={movie.id} onPress={() => handleMoviePress(movie)}>
              <Image source={movie.imageUrl} style={styles.movieImage} />
              <Text style={styles.movieTitle}>{movie.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Navbar Fitur */}
      <View style={styles.featureNavbar}>
        <TouchableOpacity style={styles.navbarItem}>
          <Text style={styles.navbarItemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarItem} onPress={goToCategoryScreen}>
          <Text style={styles.navbarItemText}>Kategori</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarItem} onPress={GoDownloadScreen}>
          <Text style={styles.navbarItemText}>Download</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarItem} onPress={goToProfileScreen}>
          <Text style={styles.navbarItemText}>Profil</Text>
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
  bigCover: {
    width: '100%',
    height: windowWidth,
    justifyContent: 'center',
    padding: 10,
  },
  bigCoverImage: {
    width: '95%',
    height: '95%',
    resizeMode: 'cover',
    justifyContent: 'center',
    borderRadius: 8,
  },
  movieListContainer: {
    paddingHorizontal: 16,
  },
  movieList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  movieItem: {
    width: windowWidth / 3 - 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3,
  },
  movieImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  movieTitle: {
    marginTop: 8,
    fontSize: 16,
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

export default HomeScreen;
