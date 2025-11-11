  import { useCurrentUser } from "@/store/features/auth/authSlice";
import { useAppSelector } from "@/store/hooks";
import { Text, View } from "react-native";

const Home = () => {
  const user = useAppSelector(useCurrentUser);
  console.log({ user });
  return <View className="flex-1 justify-center items-center">
    <Text>Welcome {user?.full_name}</Text>
    <Text>Email: {user?.email}</Text>
      <Text>Role: {user?.role}</Text>
    <Text>Is Active: {user?.is_active ? "Yes" : "No"}</Text>
    <Text>Is Email Verified: {user?.is_email_verified ? "Yes" : "No"}</Text>
  </View>;
};
export default Home;
