import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import placeholderImg from "../assets/images/placeholder.png";

export default function ProfileCard({ image, name, subtitle1, subtitle2, subjects = [], onPress }) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
            <View style={styles.row}>
                <Image
                    source={image ? { uri: image } : placeholderImg}
                    style={styles.avatar}
                />
                <View style={styles.userInfo}>
                    <Text style={styles.name}>{name}</Text>
                    {subtitle1 && <Text style={styles.subtitle}>{subtitle1}</Text>}
                    {subtitle2 && <Text style={styles.subtitle}>{subtitle2}</Text>}
                    {subjects.length > 0 && (
                        <>
                            <Text style={styles.coreLabel}>Core subject/s:</Text>
                            <View style={styles.tagContainer}>
                                {subjects.map((subj, i) => (
                                    <View key={i} style={styles.tag}>
                                        <Text style={styles.tagText}>{subj}</Text>
                                    </View>
                                ))}
                            </View>
                        </>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 8,
        paddingVertical: 20,
        paddingHorizontal: 16,
        marginBottom: 20,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 10,
    },
    userInfo: {
        flex: 1,
    },
    name: {
        fontWeight: "bold",
        fontSize: 20,
    },
    subtitle: {
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "italic",
    },
    coreLabel: {
        fontSize: 12,
        marginTop: 6,
        marginBottom: 6,
    },
    tagContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    tag: {
        backgroundColor: "rgba(134, 154, 231, 1)",
        alignSelf: "flex-start",
        borderRadius: 20,
        paddingVertical: 4,
        paddingHorizontal: 8,
        marginRight: 4,
        marginBottom: 8,
        paddingRight: 8,
    },
    tagText: {
        fontSize: 12,
        color: "white",
    },
});
