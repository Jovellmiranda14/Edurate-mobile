import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const { height } = Dimensions.get("window");

const HamburgerMenu = ({ onLogout }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {/* Hamburger Icon */}
            <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)} style={styles.icon}>
                <Ionicons name={menuOpen ? "close" : "menu"} size={32} color="white" />
            </TouchableOpacity>

            {/* Drawer Menu */}
            {menuOpen && (
                <View style={styles.menu}>
                    {/* Logo / App name */}
                    <View style={styles.logoContainer}>
                        <Image
                            source={require( "../assets/images/edurate-logo.png")}
                            style={styles.logo}
                        />
                        <Text style={styles.title}>EduRate</Text>
                    </View>

                    {/* Menu Items */}
                    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Home")}>
                        <Ionicons name="home" size={25} color="#fff" />
                        <Text style={styles.menuText}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("CommentStatus")}>
                        <Ionicons name="chatbubbles" size={25} color="#fff" />
                        <Text style={styles.menuText}>Comment status</Text>
                    </TouchableOpacity>

                    {/* Spacer pushes logout to bottom */}

                    {/* Logout */}
                    <TouchableOpacity style={styles.menuItemlogout} onPress={() => navigation.navigate("Login")}>
                        <Ionicons name="log-out-outline" size={30} color="#fff" />
                        <Text style={styles.menuTextlogout}>Log out</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default HamburgerMenu;
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 10,
        left: 20,
        zIndex: 10,
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 20,
    },
    title: {
        fontSize: 35,
        color: "#fff",
        fontWeight: "bold",
    },
    icon: {
        padding: 10,
        zIndex: 20,
        marginLeft: -5,
    },
    menu: {
        position: "absolute",
        top: 0,
        left: 0,
        height: height,
        width: 250,
        backgroundColor: "#1c2541",
        alignItems: "left",
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    logoContainer: {
        alignItems: "center",
        marginBottom: 40,
    },
    logoText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#d1c4e9", // light purple
        marginTop: 10,
    },
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
    },
    menuText: {
        fontSize: 18,
        color: "#fff",
        marginLeft: 10,
    },
    menuItemlogout: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 350,
    },
    menuTextlogout: {
        fontSize: 18,
        color: "#fff",
        marginLeft: 10,
    },
});
