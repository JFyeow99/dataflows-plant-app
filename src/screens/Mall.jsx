import { useState } from "react";
import { Alert, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Card } from "@/components/Card";
import { IconBtn } from "@/components/IconBtn";
import { PRODUCTS } from "@/data";
import { colors, shadow } from "@/theme";

const A = {
  back: require("@assets/iconArrowBack.png"),
  search: require("@assets/iconSearch.png"),
  filter: require("@assets/iconFilter.png"),
};

export default function Mall({ navigation }) {
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const products = PRODUCTS.filter((p) => p.name.toLowerCase().includes(q));

  return (
    <View style={s.screen}>
      <View style={[s.header, { paddingTop: insets.top + 8 }]}>
        <IconBtn
          source={A.back}
          label="Go back"
          width={7.5}
          height={13.5}
          tint={colors.primaryDark}
          onPress={() => navigation.navigate("Home")}
        />
        <View style={s.searchBox}>
          <Image source={A.search} style={s.searchIcon} />
          <TextInput
            style={s.input}
            placeholder="Search Plants"
            placeholderTextColor={colors.muted}
            returnKeyType="search"
            onChangeText={setQuery}
          />
          <IconBtn
            source={A.filter}
            label="Filter"
            width={20}
            height={19.5}
            onPress={() => Alert.alert("Filter", "Coming soon")}
          />
        </View>
      </View>

      <FlashList
        data={products}
        numColumns={2}
        keyExtractor={(i) => i.id}
        contentContainerStyle={s.list}
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={<Text style={s.empty}>No plants found</Text>}
        renderItem={({ item }) => (
          <Card
            item={item}
            titleStyle={s.cardTitle}
            style={s.cell}
            onPress={() => Alert.alert(item.name, `RM ${item.price}.00`)}
          />
        )}
      />
    </View>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.surface },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: colors.background,
    zIndex: 1,
    ...shadow,
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: colors.background,
    borderRadius: 19,
    paddingHorizontal: 12,
    height: 38,
    ...shadow,
  },
  searchIcon: { width: 18.5, height: 18.5, resizeMode: "contain" },
  input: {
    flex: 1,
    fontFamily: "sans-serif",
    fontSize: 13,
    color: colors.text,
    padding: 0,
  },

  list: { paddingHorizontal: 10, paddingBottom: 24 },
  cell: { flex: 1, margin: 6 },
  cardTitle: { fontFamily: "sans-serif", fontWeight: "bold", fontSize: 13 },
  empty: {
    fontFamily: "sans-serif",
    fontSize: 13,
    color: colors.muted,
    textAlign: "center",
    marginTop: 40,
  },
});
