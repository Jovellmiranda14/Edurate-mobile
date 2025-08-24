import React from "react";
import { View, ScrollView, StyleSheet, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import placeholderImg from "../assets/images/placeholder.png";
import HamburgerMenu from "../components/HamburgerMenu";
const user = {
  name: "John Smith",
  course: "BS in Information Technology",
  yearSection: "4th Year - Section A",
  image: "https://randomuser.me/api/portraits/men/1.jpg",
};

const professors = [
  {
    name: "Dr. Evelyn Harper",
    department: "BS in Information Technology",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    subjects: [
      "Programming Fundamentals",
      "Operating Systems",
      "Web Development",
    ],
  },
  {
    name: "Mr. Kevin Anderson",
    department: "Department of Computer Science",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    subjects: ["Game Development", "IT Project Management"],
  },
  {
    name: "Prof. Patricia Aguilar",
    department: "Department of Business and Management",
    image: null,
    subjects: ["Business and Management Principles"],
  },
  {
    name: "Mr. Alan Perez",
    department: "Department of Software Engineering",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    subjects: ["Mobile App Development", "Software Testing", "Web Development"],
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <HamburgerMenu stickyHeaderIndices={[0]} />
        <View style={[styles.card, { marginTop: 20 }]}>
          <View style={styles.row}>
            <Image source={{ uri: user.image }} style={styles.avatar} />
            <View style={styles.userInfo}>
              <Text style={styles.name}>{user.name}</Text>
              <Text style={styles.subtitle}>{user.course}</Text>
              <Text style={styles.subtitle}>{user.yearSection}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.heading}>Your Professors</Text>

        {professors.map((prof, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.row}>
              <Image
                source={prof.image ? { uri: prof.image } : placeholderImg}
                style={styles.avatar}
              />
              <View style={styles.userInfo}>
                <Text style={styles.name}>{prof.name}</Text>
                <Text style={styles.subtitle}>{prof.department}</Text>
                <Text style={styles.coreLabel}>Core subject/s:</Text>
                <View style={styles.tagContainer}>
                  {prof.subjects.map((subj, i) => (
                    <View key={i} style={styles.tag}>
                      <Text style={styles.tagText}>{subj}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#1E2640",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 40
  },
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
  heading: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginTop: -1,
    marginBottom: 15,
    marginLeft: 4,
    borderColor: "#fff",
    borderWidth: 1,
    alignSelf: "flex-start",
    backgroundColor: "rgba(255,255,255,0.1)",
    paddingHorizontal: 4,
    paddingVertical: 4,
    borderRadius: 5,
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
    backgroundColor: "#E6E8F0",
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 4,
    marginBottom: 8,
    paddingRight: 2,
  },
  tagText: {
    fontSize: 12,
    color: "#333",
  },
});
