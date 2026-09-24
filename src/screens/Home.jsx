import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import { useIsFocused } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Card } from "@/components/Card";
import { CategoryRow } from "@/components/CategoryRow";
import { IconBtn } from "@/components/IconBtn";
import {
  APPOINTMENT,
  CATEGORIES,
  LOCATIONS,
  SERVICES,
  STATS,
  TRENDING,
} from "@/data";
import { colors, shadow } from "@/theme";

const A = {
  banner: require("@assets/homeBanner.jpg"),
  trending: require("@assets/trendingDiscoveries.jpg"),
  logo: require("@assets/shopPlantsIconMain.png"),
  map: require("@assets/locationMap.webp"),
  calendar: require("@assets/iconCalendar.png"),
  clock: require("@assets/iconClock.png"),
  location: require("@assets/iconLocation.png"),
  clockDark: require("@assets/iconClockDark.png"),
  locationDark: require("@assets/iconLocationDark.png"),
  arrow: require("@assets/iconArrowCircle.png"),
};

const fullWidth = (src) => {
  const { width, height } = Image.resolveAssetSource(src);
  return { width: "100%", height: "auto", aspectRatio: width / height };
};

const SECTIONS = ["Shop", "Services", "Posts"];

export default function Home({ navigation }) {
  const insets = useSafeAreaInsets();
  const focused = useIsFocused();

  const onSection = (label) =>
    label === "Shop"
      ? navigation.navigate("Mall")
      : Alert.alert(label.toUpperCase(), "Coming soon");

  const header = (
    <View>
      {focused && (
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.primaryDark}
        />
      )}
      <View style={[s.hero, { paddingTop: insets.top + 16 }]}>
        <Text style={s.logo}>LOGO</Text>
        <Text style={s.eyebrow}>NEXT APPOINTMENT</Text>
        <View style={s.apptRow}>
          <Image source={A.calendar} style={s.metaIcon} />
          <Text style={s.apptText}>{APPOINTMENT.date}</Text>
          <Image source={A.clock} style={s.metaIcon} />
          <Text style={s.apptText}>{APPOINTMENT.time}</Text>
          <Image source={A.location} style={s.metaIcon} />
          <Text style={[s.apptText, s.flex]} numberOfLines={1}>
            {APPOINTMENT.address}
          </Text>
          <IconBtn
            source={A.arrow}
            label="View appointment"
            width={25}
            height={25}
            onPress={() =>
              Alert.alert(
                "Next appointment",
                `${APPOINTMENT.date} at ${APPOINTMENT.time}`,
              )
            }
          />
        </View>
      </View>

      <View style={s.stats}>
        {STATS.map((st) => (
          <View key={st.label} style={s.stat}>
            <Text style={s.statLabel}>{st.label.toUpperCase()}</Text>
            <Text style={s.statValue}>{st.value}</Text>
          </View>
        ))}
      </View>

      <Image source={A.banner} style={s.banner} />

      <View style={s.sectionBtns}>
        {SECTIONS.map((label) => (
          <Pressable
            key={label}
            onPress={() => onSection(label)}
            accessibilityRole="button"
            style={({ pressed }) => [s.btn, pressed && s.btnPressed]}
          >
            <Text style={s.btnText}>{label.toUpperCase()}</Text>
          </Pressable>
        ))}
      </View>

      <CategoryRow categories={CATEGORIES} size="lg" />

      <View style={s.band}>
        <View style={s.sectionHead}>
          <View style={s.flex}>
            <Text style={s.sectionTitle}>NEW SERVICES</Text>
            <Text style={s.sectionSub}>
              Recommended based on your preference
            </Text>
          </View>
          <Pressable
            onPress={() => Alert.alert("New services", "Coming soon")}
            accessibilityRole="button"
            hitSlop={12}
          >
            <Text style={s.viewAll}>View All</Text>
          </Pressable>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={s.servicesRow}
        >
          {SERVICES.map((item) => (
            <Card
              key={item.id}
              item={item}
              style={s.serviceCard}
              onPress={() => Alert.alert(item.name, `RM ${item.price}.00`)}
            />
          ))}
        </ScrollView>

        <View style={s.shopPlants}>
          <Image source={A.logo} style={s.shopLogo} />
          <View style={s.flex}>
            <CategoryRow categories={CATEGORIES} size="sm" />
          </View>
        </View>
      </View>

      <Image source={A.trending} style={s.trending} />
    </View>
  );

  const footer = (
    <View style={s.location}>
      <Text style={s.locationHead}>LOCATION</Text>
      <Image source={A.map} style={s.map} />
      {LOCATIONS.map((l) => (
        <View key={l.id} style={s.store}>
          <Text style={s.storeName}>{l.name}</Text>
          <View style={s.storeRow}>
            <Image source={A.locationDark} style={s.storeIcon} />
            <Text style={s.storeAddress}>{l.address}</Text>
          </View>
          <View style={s.storeRow}>
            <Image source={A.clockDark} style={s.storeIcon} />
            <Text style={s.storeHours}>{l.hours}</Text>
          </View>
        </View>
      ))}
    </View>
  );

  return (
    <View style={s.flex}>
      <FlashList
        masonry
        data={TRENDING}
        numColumns={2}
        keyExtractor={(i) => i.id}
        ListHeaderComponent={header}
        ListHeaderComponentStyle={s.gridHeader}
        ListFooterComponent={footer}
        ListFooterComponentStyle={s.gridFooter}
        contentContainerStyle={s.grid}
        renderItem={({ item }) => (
          <Card
            item={item}
            style={s.gridCell}
            onPress={() => Alert.alert(item.name, "Coming soon")}
          />
        )}
      />
      <View style={[s.statusBarBg, { height: insets.top }]} />
    </View>
  );
}

const s = StyleSheet.create({
  flex: { flex: 1 },
  statusBarBg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.primaryDark,
  },

  grid: { backgroundColor: colors.primaryDarker, paddingHorizontal: 14 },
  gridHeader: {
    marginHorizontal: -14,
    marginBottom: 14,
    backgroundColor: colors.background,
  },
  gridFooter: { marginHorizontal: -14, marginTop: 14 },
  gridCell: { margin: 6 },

  hero: {
    backgroundColor: colors.primaryDark,
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  logo: {
    fontFamily: "sans-serif-medium",
    fontSize: 44,
    color: colors.onPrimary,
    textAlign: "center",
  },
  eyebrow: {
    fontFamily: "sans-serif-medium",
    fontSize: 8,
    letterSpacing: 1.6,
    color: colors.onPrimary,
    textAlign: "center",
    marginTop: 2,
  },
  apptRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 14,
  },
  metaIcon: { width: 12, height: 13, resizeMode: "contain" },
  apptText: { fontFamily: "sans-serif", fontSize: 13, color: colors.onPrimary },

  stats: {
    flexDirection: "row",
    backgroundColor: colors.background,
    marginHorizontal: 16,
    marginTop: -28,
    borderRadius: 5,
    paddingVertical: 12,
    ...shadow,
  },
  stat: { flex: 1, alignItems: "center" },
  statLabel: {
    fontFamily: "sans-serif",
    fontSize: 11,
    color: colors.primaryDark,
  },
  statValue: {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    fontSize: 14,
    color: colors.primaryDark,
    marginTop: 2,
  },

  banner: { ...fullWidth(A.banner), marginTop: 20 },

  sectionBtns: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    padding: 16,
  },
  btn: {
    flex: 1,
    maxWidth: 110,
    minHeight: 50,
    borderRadius: 5,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    ...shadow,
  },
  btnPressed: { opacity: 0.7 },
  btnText: {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    fontSize: 14,
    color: colors.onPrimary,
  },

  band: { backgroundColor: colors.surface, paddingBottom: 16 },
  sectionHead: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 16,
    marginTop: 20,
  },
  sectionTitle: {
    fontFamily: "sans-serif-medium",
    fontSize: 15,
    color: colors.text,
  },
  sectionSub: {
    fontFamily: "sans-serif",
    fontSize: 12,
    color: colors.muted,
    marginTop: 2,
  },
  viewAll: { fontFamily: "sans-serif", fontSize: 12, color: colors.muted },

  servicesRow: { paddingHorizontal: 16, paddingVertical: 12 },
  serviceCard: { width: 160, marginRight: 12 },

  shopPlants: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    marginTop: 8,
  },
  shopLogo: { width: 95, height: 82, resizeMode: "contain" },

  trending: fullWidth(A.trending),

  location: {
    padding: 16,
    paddingBottom: 40,
    backgroundColor: colors.background,
  },
  locationHead: {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    fontSize: 15,
    color: colors.primaryDark,
    marginBottom: 12,
  },
  map: { ...fullWidth(A.map), borderRadius: 5 },
  store: { marginTop: 16, gap: 6 },
  storeName: {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    fontSize: 15,
    color: colors.primaryDark,
  },
  storeRow: { flexDirection: "row", alignItems: "flex-start", gap: 8 },
  storeIcon: { width: 11, height: 15, resizeMode: "contain", marginTop: 3 },
  storeAddress: {
    flex: 1,
    fontFamily: "sans-serif",
    fontSize: 15,
    color: colors.link,
  },
  storeHours: { fontFamily: "sans-serif", fontSize: 15, color: colors.muted },
});
