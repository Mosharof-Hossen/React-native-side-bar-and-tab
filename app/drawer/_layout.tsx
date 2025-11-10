import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="(tabs)"
        options={{ title: "Homee", drawerLabel: "Home" }}
      />
      <Drawer.Screen name="about" options={{ title: "About" }} />
    </Drawer>
  );
}