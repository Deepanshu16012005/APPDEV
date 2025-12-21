import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{
    contentStyle:{backgroundColor:"#24180f"},
    headerStyle: { backgroundColor: '#351401' },
    headerTintColor: '#fff',
    
  }}>
  </Stack>;
}
