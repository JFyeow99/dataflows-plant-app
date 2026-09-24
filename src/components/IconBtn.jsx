import { Image, Pressable } from "react-native";

export function IconBtn({ source, label, onPress, width, height, tint }) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      hitSlop={20}
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
    >
      <Image
        source={source}
        style={{ width, height, tintColor: tint }}
        resizeMode="contain"
      />
    </Pressable>
  );
}
