import { Text, View } from "react-native";

const Contact = () => {
  return (
    <View className="flex-1 items-center justify-center px-6">
      <Text className="text-2xl font-bold mb-2">Contact</Text>
      <Text className="text-base text-center">
        Reach out to us at contact@example.com or call +1 (555) 123-4567.
      </Text>
    </View>
  );
};

export default Contact;

