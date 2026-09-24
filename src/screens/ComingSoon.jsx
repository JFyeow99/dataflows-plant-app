import { StyleSheet, Text, View } from "react-native";
import { colors } from "@/theme";

export default function ComingSoon({ route }) {
  return (
    <View style={s.screen}>
      <Text style={s.title}>{route.name}</Text>
      <Text style={s.body}>Coming soon</Text>
    </View>
  );
}

const s = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
    gap: 6,
  },
  title: {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    fontSize: 15,
    color: colors.primaryDark,
  },
  body: { fontFamily: "sans-serif", fontSize: 13, color: colors.muted },
});
