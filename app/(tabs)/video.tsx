import { CameraView, useCameraPermissions } from 'expo-camera';
import React, { useRef, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const VideoScreen = () => {
  const cameraRef = useRef<CameraView>(null);
  const [permission, requestPermission] = useCameraPermissions();
  const [cameraReady, setCameraReady] = useState(false);

  if (!permission?.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Camera permission required</Text>
        <TouchableOpacity style={styles.button} onPress={requestPermission}>
          <Text style={styles.buttonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView
        ref={cameraRef}
        style={styles.camera}
        facing="back"
        onCameraReady={() => setCameraReady(true)}
      />
      
      <View style={styles.overlay}>
        <Text style={styles.title}>Camera Preview</Text>
        <Text style={styles.subtitle}>
          {cameraReady 
            ? "Camera ready! Recording requires development build."
            : "Initializing camera..."
          }
        </Text>
        
        <TouchableOpacity 
          style={styles.demoButton}
          onPress={() => Alert.alert(
            "Development Build Required",
            "Full camera recording requires:\n\neas build --profile development --platform ios"
          )}
        >
          <Text style={styles.buttonText}>Try Recording</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  camera: { flex: 1 },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: 20,
    alignItems: 'center',
  },
  title: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  subtitle: { color: '#ccc', fontSize: 14, textAlign: 'center', marginVertical: 10 },
  demoButton: { backgroundColor: '#007AFF', padding: 15, borderRadius: 10, minWidth: 140 },
  button: { backgroundColor: '#007AFF', padding: 15, borderRadius: 10, marginTop: 10 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  text: { color: 'white', fontSize: 16, marginBottom: 10 },
});

export default VideoScreen;