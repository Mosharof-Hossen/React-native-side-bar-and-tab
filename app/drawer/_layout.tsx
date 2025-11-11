import { logout, useCurrentUser } from "@/store/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  DrawerContentScrollView,
  DrawerItem,
  type DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { Redirect, useRouter, useSegments, type Href } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Alert } from "react-native";

const APP_TITLE = "Leadership Development";

type DrawerRoute = {
  key: string;
  label: string;
  href: Href;
};

const drawerRoutes = [
  { key: "home", label: "Home", href: "/drawer/(tabs)/home" as const },
  { key: "settings", label: "Settings", href: "/drawer/(tabs)/settings" as const },
  { key: "profile", label: "Profile", href: "/drawer/(tabs)/profile" as const },
  { key: "about", label: "About", href: "/drawer/(tabs)/about" as const },
  { key: "contact", label: "Contact", href: "/drawer/(tabs)/contact" as const },
] satisfies DrawerRoute[];

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const router = useRouter();
  const segments = useSegments();
  const activeKey = segments[2] ?? "home";
  const dispatch = useAppDispatch();

  return (
    <DrawerContentScrollView {...props}>
      {drawerRoutes.map((route) => (
        <DrawerItem
          key={route.key}
          label={route.label}
          focused={activeKey === route.key}
          onPress={() => {
            router.replace(route.href);
            props.navigation.closeDrawer();
          }}
        />
      ))}
      <DrawerItem
        label="Logout"
        onPress={() => {
          props.navigation.closeDrawer();
          dispatch(logout());
          Alert.alert("Logout", "You have been signed out.");
          router.replace("/");
        }}
      />
    </DrawerContentScrollView>
  );
}

export default function DrawerLayout() {
  const currentUser = useAppSelector(useCurrentUser);

  if (!currentUser) {
    return <Redirect href="/" />;
  }

  return (
    <Drawer
      screenOptions={{
        headerTitle: APP_TITLE,
        drawerType: "front",
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: "Home",
          headerShown: true,
        }}
      />
    </Drawer>
  );
}