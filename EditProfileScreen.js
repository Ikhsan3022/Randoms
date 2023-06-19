import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const EditProfileScreen = () => {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handleSaveChanges = () => {
    // Simpan perubahan profil ke backend atau lakukan operasi lainnya
    console.log('Profil berhasil diperbarui:', name, birthday, profileImage);
  };

  const handleChooseProfileImage = () => {
    // Implementasikan logika untuk memilih gambar profil dari perangkat pengguna
    console.log('Pilih gambar profil');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.changeProfileImageContainer} onPress={handleChooseProfileImage}>
        {profileImage ? (
          <Image source={profileImage} style={styles.profileImage} />
        ) : (
          <Ionicons name="person-circle-outline" size={120} color="#ccc" />
        )}
        <Text style={styles.changeProfileImageText}>Ubah Foto Profil</Text>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nama</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Masukkan Nama"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Tanggal Lahir</Text>
        <TextInput
          style={styles.input}
          value={birthday}
          onChangeText={(text) => setBirthday(text)}
          placeholder="Masukkan Tanggal Lahir"
        />
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Simpan Perubahan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  changeProfileImageContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  changeProfileImageText: {
    marginTop: 8,
    fontSize: 16,
    color: '#e50914',
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#e50914',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
