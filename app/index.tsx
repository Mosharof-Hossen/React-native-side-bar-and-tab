import { icons } from "@/constants/icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../contexts/auth";

 
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
    <View className="flex-1 items-center justify-center bg-[#F8FAFC] px-6">
      <StatusBar style="dark" />
      <View className="mb-6">
        <Image
          source={icons.logo}
          className="h-[72px] w-[72px]"
          style={{ resizeMode: "contain" }}
        />
      </View>
      <Text className="mb-3 text-center text-3xl font-bold text-[#005E9E]">
        Anchor. Act. Ascend.
      </Text>
      <Text className="mb-8 px-2 text-center text-base text-[#475569]">
        Your journey to leadership excellence starts here.
      </Text>
      <View className="flex-row">
        <TouchableOpacity
          className="mr-3 rounded-full border-2 border-[#0F4C81] bg-[#0F4C81] px-6 py-3"
          onPress={() => router.push("/auth/signup")}
        >
          <Text className="font-semibold text-white">Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="rounded-full border-2 border-[#0F4C81] bg-transparent px-6 py-3"
          onPress={() => router.push("/auth/login")}
        >
          <Text className="font-semibold text-[#0F4C81]">Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
