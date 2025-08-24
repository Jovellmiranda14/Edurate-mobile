import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import HamburgerMenu from "../components/HamburgerMenu";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileCard from "../components/ProfileCard";

export default function ProfessorDetailsScreen({ route }) {
    const { professor } = route.params;

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <HamburgerMenu />
            </View>
            <ScrollView style={styles.container}>
                <View style={styles.cardWrapper}>
                    <ProfileCard
                        image={professor.image}
                        name={professor.name}
                        subtitle1={professor.department}
                        subjects={professor.subjects}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#1E2640",
    },
    header: {
        paddingHorizontal: 20,
        paddingTop: 10,
        backgroundColor: "#1E2640",
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#1E2640",
    },
    cardWrapper: {
        marginTop: 30,
    },
});
