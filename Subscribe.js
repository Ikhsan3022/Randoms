import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SubscribeScreen = () => {
  const handleSubscribe = (packageType) => {
    // Tambahkan logika untuk langganan paket sesuai packageType yang dipilih
    console.log(`Menggunakan paket ${packageType}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pilih Paket</Text>

      <TouchableOpacity style={styles.package} onPress={() => handleSubscribe('Basic')}>
        <Text style={styles.packageTitle}>Paket Basic</Text>
        <Text style={styles.packagePrice}>$9.99/bulan</Text>
        <Text style={styles.packageDescription}>Akses penuh ke semua fitur dasar platform kami.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.package} onPress={() => handleSubscribe('Premium')}>
        <Text style={styles.packageTitle}>Paket Premium</Text>
        <Text style={styles.packagePrice}>$19.99/bulan</Text>
        <Text style={styles.packageDescription}>Fitur lengkap dengan akses ke konten eksklusif, dukungan pelanggan prioritas, dan tanpa iklan.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.package} onPress={() => handleSubscribe('Gold')}>
        <Text style={styles.packageTitle}>Paket Gold</Text>
        <Text style={styles.packagePrice}>$29.99/bulan</Text>
        <Text style={styles.packageDescription}>Semua fitur Premium ditambah akses ke konten eksklusif premium, acara langsung, dan materi pelatihan eksklusif.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.package} onPress={() => handleSubscribe('Family')}>
        <Text style={styles.packageTitle}>Paket Family</Text>
        <Text style={styles.packagePrice}>$39.99/bulan</Text>
        <Text style={styles.packageDescription}>Akses untuk seluruh keluarga dengan hingga lima akun terpisah, fitur premium, dan konten keluarga yang disesuaikan.</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  package: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    width: '100%',
  },
  packageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  packagePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  packageDescription: {
    fontSize: 14,
    color: '#777',
  },
});

export default SubscribeScreen;
