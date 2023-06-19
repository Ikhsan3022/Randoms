import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const handleEditProfile = () => {
    // Navigasi ke halaman Ubah Profil
    navigation.navigate('EditProfile');
  };

  const handleSettings = () => {
    // Navigasi ke halaman Pengaturan
    navigation.navigate('Settings');
  };

  const handleSubscribe = () => {
    // Navigasi ke halaman Subscribe
    navigation.navigate('Subscribe');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./profile_image.png')} style={styles.profileImage} />

      <Text style={styles.title}>Profil</Text>

      <View style={styles.profileInfo}>
        {/* Informasi Profil Pengguna */}
        {/* ... */}
      </View>

      <View style={styles.buttonsContainer}>
        {/* Tombol Ubah Profil */}
        <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
          <Text style={styles.buttonText}>Ubah Profil</Text>
        </TouchableOpacity>

        {/* Tombol Pengaturan */}
        <TouchableOpacity style={styles.button} onPress={handleSettings}>
          <Text style={styles.buttonText}>Pengaturan</Text>
        </TouchableOpacity>

        {/* Tombol Subscribe */}
        <TouchableOpacity style={styles.button} onPress={handleSubscribe}>
          <Text style={styles.buttonText}>Subscribe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileInfo: {
    // Styling untuk informasi profil
    // ...
  },
  buttonsContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#e50914',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
