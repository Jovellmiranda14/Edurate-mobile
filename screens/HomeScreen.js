import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HamburgerMenu from "../components/HamburgerMenu";
import ProfileCard from "../components/ProfileCard";
import { useNavigation } from "@react-navigation/native";

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
    subjects: ["Programming Fundamentals", "Operating Systems", "Web Development"],
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
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <HamburgerMenu stickyHeaderIndices={[0]} />
        <ProfileCard
          image={user.image}
          name={user.name}
          subtitle1={user.course}
          subtitle2={user.yearSection}
        />

        <Text style={styles.heading}>Your Professors</Text>

        {professors.map((prof, index) => (
          <ProfileCard
            key={index}
            image={prof.image}
            name={prof.name}
            subtitle1={prof.department}
            subjects={prof.subjects}
            onPress={() => navigation.navigate("ProfessorDetailsScreen", { professor: prof })}
          />
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
    paddingTop: 60,
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
});
