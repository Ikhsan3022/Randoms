import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView,TouchableOpacity  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const PlayVideoScreen  = ({ navigation }) => {
  const goToSubscribeScreen = () => {
    navigation.navigate('Subscribe');
  };
  const videoTitle = "The Amazing Spider-Man";
  const videoDescription = "Peter Parker, an outcast high school student, gets bitten by a radioactive spider and attains superpowers. While unraveling his parents' disappearance, he must fight against the Lizard.";
  const videoEps2 = "The Amazing Spider-Man: Episode 2";
  const similarMovies = [
    { id: 1, title: 'Spider-Man: Homecoming', imageUrl: require('./spiderman_homecoming.jpg') },
    { id: 2, title: 'Spider-Man: Far From Home', imageUrl: require('./spiderman_far_from_home.jpg') },
    { id: 3, title: 'Spider-Man: No Way Home', imageUrl: require('./spiderman_no_way_home.jpg') },
  ];

  
  return (
    <ScrollView style={styles.container}>
      {/* Video Player */}
      <View style={styles.videoPlayer}>
        {/* Your video player component goes here */}
      </View>

      {/* Video Title */}
      <Text style={styles.videoTitle}>{videoTitle}</Text>

      {/* Video Description */}
      <Text style={styles.videoDescription}>{videoDescription}</Text>

      {/* Episode 2 */}
      <View style={styles.container}>
      <Text style={styles.sectionTitle}>Episode 2</Text>
      <View style={styles.eps2Container}>
        <Text style={styles.sectionTitle}>Episode 2</Text>
        <TouchableOpacity style={styles.subscribeButton} onPress={goToSubscribeScreen}>
          <Ionicons name="lock-closed" size={24} color="#fff" />
          <Text style={styles.subscribeButtonText}>Subscribe to Unlock</Text>
        </TouchableOpacity>
      </View>
    </View>

      {/* Similar Movies */}
      <Text style={styles.sectionTitle}>Similar Movies</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.similarMoviesContainer}>
        {similarMovies.map((movie) => (
          <View style={styles.movieItem} key={movie.id}>
            <Image source={movie.imageUrl} style={styles.movieImage} />
            <Text style={styles.movieTitle}>{movie.title}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
  },
  videoPlayer: {
    aspectRatio: 16 / 9,
    backgroundColor: '#000',
    borderRadius: 8,
    marginBottom: 16,
  },
  videoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  videoDescription: {
    fontSize: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  eps2Container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  similarMoviesContainer: {
    marginBottom: 16,
  },
  movieItem: {
    width: 120,
    marginRight: 12,
  },
  movieImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 8,
  },
  movieTitle: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default PlayVideoScreen;
