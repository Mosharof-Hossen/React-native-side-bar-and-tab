import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../contexts/auth";

export default function SignupScreen() {
  const router = useRouter();
  const { signIn } = useAuth();

  const handleSignup = () => {
    signIn();
    router.replace("/drawer/(tabs)/home");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.title}>Join Anchor. Act. Ascend.</Text>
      <Text style={styles.subtitle}>Create an account to get started.</Text>
      <TextInput placeholder="Full Name" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonLabel}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.replace("/auth/login")}
        style={styles.linkButton}
      >
        <Text style={styles.linkLabel}>Already have an account? Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#0F4C81",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#475569",
    textAlign: "center",
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CBD5F5",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#0F4C81",
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 8,
  },
  buttonLabel: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
  linkButton: {
    marginTop: 16,
    alignItems: "center",
  },
  linkLabel: {
    color: "#0F4C81",
    fontWeight: "500",
  },
});

