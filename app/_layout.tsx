import { Stack } from "expo-router";
import { AuthProvider } from "../contexts/auth";
import "./global.css";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="auth/login" options={{ headerShown: false }} />
        <Stack.Screen name="auth/signup" options={{ headerShown: false }} />
        <Stack.Screen name="drawer" options={{ headerShown: false }} />
        <Stack.Screen name="details" options={{ headerShown: true }} />
      </Stack>
    </AuthProvider>
  );
}
