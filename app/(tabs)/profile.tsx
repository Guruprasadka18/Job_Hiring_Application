import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function ProfileScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");

  const handleSubmit = () => {
    console.log({ name, email, skills, experience });
    alert("Profile saved!");
    router.push("/video"); // Navigate to Video page
  };

  return (
    <LinearGradient colors={["#00C6FF", "#0072FF"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.card}>
          <Text style={styles.title}>Create Your Profile</Text>

          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            placeholderTextColor="#eee"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#eee"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <Text style={styles.label}>Skills</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. React Native, Node.js"
            placeholderTextColor="#eee"
            value={skills}
            onChangeText={setSkills}
          />

          <Text style={styles.label}>Experience (years)</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter years of experience"
            placeholderTextColor="#eee"
            value={experience}
            onChangeText={setExperience}
            keyboardType="numeric"
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Save & Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { flexGrow: 1, justifyContent: "center", alignItems: "center", paddingVertical: 20 },
  card: {
    width: "90%",
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 25,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  title: { fontSize: 28, fontWeight: "bold", color: "#fff", marginBottom: 25, textAlign: "center" },
  label: { color: "#e0e0e0", fontSize: 14, marginBottom: 5, marginTop: 10 },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 12,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "rgba(255,255,255,0.25)",
    color: "#fff",
  },
  button: {
    width: "100%",
    height: 55,
    backgroundColor: "#fff",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: { color: "#0072FF", fontSize: 18, fontWeight: "bold" },
});
