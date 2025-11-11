import { LoginPayload } from "@/schema/auth";
import { useLoginMutation } from "@/store/features/auth/authApi";
import { setCredentials } from "@/store/features/auth/authSlice";
import { useAppDispatch } from "@/store/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Controller, useForm } from "react-hook-form";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import * as yup from "yup";

const loginSchema = yup.object({
  email: yup.string().email("Invalid email address").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function LoginScreen() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = async (values: LoginPayload) => {
    console.log({values});

    try {
      const response = await login(values).unwrap();
      console.log({response});
      dispatch(setCredentials(response));
      router.replace("/drawer/(tabs)/home");
    } catch (error) {
      console.error("Login failed", error);
      Alert.alert("Login failed", "Please check your credentials and try again.");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Log in to continue your journey.</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Email"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.email ? <Text style={styles.errorText}>{errors.email.message}</Text> : null}
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.password ? (
        <Text style={styles.errorText}>{errors.password.message}</Text>
      ) : null}
      <TouchableOpacity
        style={[styles.button, isLoading ? styles.buttonDisabled : null]}
        onPress={handleSubmit(handleLogin)}
        disabled={isLoading}
      >
        <Text style={styles.buttonLabel}>{isLoading ? "Logging In..." : "Log In"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.replace("/auth/signup")}
        style={styles.linkButton}
      >
        <Text style={styles.linkLabel}>Don&apos;t have an account? Sign Up</Text>
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
    fontSize: 28,
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
  errorText: {
    color: "#DC2626",
    marginBottom: 12,
    marginLeft: 4,
    fontSize: 12,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
});
