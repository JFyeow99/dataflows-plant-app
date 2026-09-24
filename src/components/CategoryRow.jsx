import { Image, ScrollView, StyleSheet } from "react-native";

export function CategoryRow({ categories, size }) {
  const d = size === "lg" ? 78 : 60;

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={s.row}
    >
      {categories.map((c) => (
        <Image
          key={c.name}
          source={size === "lg" ? c.lg : c.sm}
          accessibilityLabel={c.name}
          style={{ width: d, height: d, borderRadius: d / 2 }}
        />
      ))}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  row: { paddingHorizontal: 16, paddingVertical: 4, gap: 10 },
});
