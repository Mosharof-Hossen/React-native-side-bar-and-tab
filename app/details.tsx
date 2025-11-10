import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import { useAuth } from "../contexts/auth";

const Details = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href="/" />;
  }

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Details</Text>
    </View>
  );
};

export default Details;