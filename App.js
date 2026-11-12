import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [screen, setScreen] = useState('welcome');

  // WELCOME SCREEN
  if (screen === 'welcome') {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoEmoji}>🌱</Text>
          <Text style={styles.title}>WasteWise</Text>
          <Text style={styles.subtitle}>Sort smart, live clean</Text>
        </View>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={() => setScreen('home')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        
        <StatusBar style="auto" />
      </View>
    );
  }

  // HOME SCREEN
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeTitle}>How to Sort Your Waste</Text>
      
      <View style={styles.binRow}>
        <TouchableOpacity style={[styles.binCard, styles.greenBin]}>
          <Text style={styles.binEmoji}>♻️</Text>
          <Text style={styles.binLabel}>Recyclable</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.binCard, styles.yellowBin]}>
          <Text style={styles.binEmoji}>🥫</Text>
          <Text style={styles.binLabel}>Residual</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.binRow}>
        <TouchableOpacity style={[styles.binCard, styles.brownBin]}>
          <Text style={styles.binEmoji}>🍌</Text>
          <Text style={styles.binLabel}>Biodegradable</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.binCard, styles.redBin]}>
          <Text style={styles.binEmoji}>⚠️</Text>
          <Text style={styles.binLabel}>Hazardous</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity 
        style={styles.backBtn}
        onPress={() => setScreen('welcome')}
      >
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // WELCOME SCREEN STYLES
  container: {
    flex: 1,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 80,
  },
  logoEmoji: {
    fontSize: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#E8F5E9',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 18,
    paddingHorizontal: 80,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4CAF50',
  },
  
  // HOME SCREEN STYLES
  homeContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  homeTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 40,
  },
  binRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  binCard: {
    width: '47%',
    paddingVertical: 30,
    borderRadius: 16,
    alignItems: 'center',
  },
  binEmoji: {
    fontSize: 40,
    marginBottom: 8,
  },
  binLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  greenBin: { backgroundColor: '#4CAF50' },
  yellowBin: { backgroundColor: '#FDD835' },
  brownBin: { backgroundColor: '#8D6E63' },
  redBin: { backgroundColor: '#E53935' },
  backBtn: {
    marginTop: 30,
    alignSelf: 'center',
  },
  backText: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: '600',
  },
});