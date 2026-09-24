import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { colors, shadow } from "@/theme";

const CARD_IMAGE = require("@assets/plantThumb.jpg");
const BADGE = require("@assets/badge50.png");

export function Card({ item, onPress, titleStyle, style }) {
  const discounted = item.wasPrice != null;

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [s.card, style, pressed && s.pressed]}
    >
      <View>
        <Image source={CARD_IMAGE} style={s.image} />
        {discounted && <Image source={BADGE} style={s.badge} />}
      </View>

      <View style={s.body}>
        <Text style={s.kicker}>Lorem Ipsum</Text>
        <Text style={[s.name, titleStyle]}>{item.name}</Text>
        {item.price != null && (
          <>
            {discounted && <Text style={s.was}>RM {item.wasPrice}.00</Text>}
            <Text style={s.price}>RM {item.price}.00</Text>
          </>
        )}
      </View>
    </Pressable>
  );
}

const s = StyleSheet.create({
  card: {
    backgroundColor: colors.background,
    borderRadius: 5,
    overflow: "hidden",
    ...shadow,
  },
  pressed: { opacity: 0.7 },
  image: { width: "100%", height: "auto", aspectRatio: 1 },
  badge: { width: 48, height: 48, position: "absolute", top: 8, right: 8 },
  body: { padding: 10, gap: 2 },
  kicker: { fontFamily: "sans-serif", fontSize: 12, color: colors.muted },
  name: { fontFamily: "sans-serif-medium", fontSize: 15, color: colors.text },
  was: {
    fontFamily: "sans-serif",
    fontSize: 12,
    color: colors.muted,
    textDecorationLine: "line-through",
  },
  price: { fontFamily: "sans-serif", fontSize: 15, color: colors.price },
});
