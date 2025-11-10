import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../contexts/auth";

const HERO_IMAGE =
  "https://raw.githubusercontent.com/expo/expo/main/docs/public/static/images/tutorial/app-icon.png";

export default function Index() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  console.log({isAuthenticated});

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/drawer/(tabs)/home");
    }
  }, [isAuthenticated, router]);

  if (isAuthenticated) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Image source={{ uri: HERO_IMAGE }} style={styles.logo} />
      </View>
      <Text style={styles.title}>Anchor. Act. Ascend.</Text>
      <Text style={styles.subtitle}>
        Your journey to leadership excellence starts here.
      </Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.primary]}
          onPress={() => router.push("/auth/signup")}
        >
          <Text style={styles.primaryLabel}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.secondary]}
          onPress={() => router.push("/auth/login")}
        >
          <Text style={styles.secondaryLabel}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: "#F8FAFC",
  },
  header: {
    marginBottom: 24,
  },
  logo: {
    width: 72,
    height: 72,
    resizeMode: "contain",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#005E9E",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#475569",
    textAlign: "center",
    marginBottom: 32,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 12,
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 24,
    borderWidth: 2,
  },
  primary: {
    backgroundColor: "#0F4C81",
    borderColor: "#0F4C81",
  },
  primaryLabel: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  secondary: {
    backgroundColor: "transparent",
    borderColor: "#0F4C81",
  },
  secondaryLabel: {
    color: "#0F4C81",
    fontWeight: "600",
  },
});
