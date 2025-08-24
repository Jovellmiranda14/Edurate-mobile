import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import HamburgerMenu from "../components/HamburgerMenu";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileCard from "../components/ProfileCard";
import Checkbox from 'expo-checkbox';

export default function ProfessorDetailsScreen({ route }) {
    const { professor } = route.params;
    const [isChecked, setChecked] = useState(false);
    const [activeTab, setActiveTab] = useState("Rating");
    const [answers, setAnswers] = useState({});
    const [comment, setComment] = useState("");

    const questions = [
        {
            id: 1,
            text: "Is the teacher available to provide extra help outside of class hours?",
            options: ["Yes", "No"],
        },
        {
            id: 2,
            text: "How satisfied are you with the teacher’s overall performance?",
            options: ["Very satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very dissatisfied"],
        },
        {
            id: 3,
            text: "How clear are the teacher’s explanations of the subject matter?",
            options: ["Very clear", "Clear", "Neutral", "Unclear", "Very unclear"],
        },
        {
            id: 4,
            text: "How engaging are the teacher’s lessons?",
            options: ["Very engaging", "Engaging", "Neutral", "Unengaging", "Very unengaging"],
        },
        {
            id: 5,
            text: "How fair is the teacher in grading and assessment?",
            options: ["Very fair", "Fair", "Neutral", "Unfair", "Very unfair"],
        },
        {
            id: 6,
            text: "How approachable is the teacher for questions or concerns?",
            options: ["Very approachable", "Approachable", "Neutral", "Unapproachable", "Very unapproachable"],
        },
        {
            id: 7,
            text: "How timely is the teacher in providing feedback on assignments or exams?",
            options: ["Always on time", "Mostly on time", "Sometimes late", "Often late"],
        },
        {
            id: 8,
            text: "How effective is the teacher in using teaching aids (slides, activities, technology, etc.)?",
            options: ["Very effective", "Effective", "Neutral", "Ineffective", "Very ineffective"],
        },
        {
            id: 9,
            text: "Does the teacher encourage class participation and discussion?",
            options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
        },
        {
            id: 10,
            text: "How well does the teacher connect lessons to real-life examples or applications?",
            options: ["Very well", "Well", "Neutral", "Poorly", "Very poorly"],
        },
    ];

    const handleSelect = (qId, option) => {
        setAnswers((prev) => ({ ...prev, [qId]: option }));
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <HamburgerMenu />
            </View>
            <View style={styles.container}>
                <View style={styles.cardWrapper}>
                    <ProfileCard
                        image={professor.image}
                        name={professor.name}
                        subtitle1={professor.department}
                        subjects={professor.subjects}
                    />

                    <View style={styles.row}>
                        <TouchableOpacity
                            style={[styles.cell, activeTab === "rating" && styles.activeTab]}
                            onPress={() => setActiveTab("rating")}
                        >
                            <Text style={styles.label}>Rating</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.cell, activeTab === "comment" && styles.activeTab]}
                            onPress={() => setActiveTab("comment")}
                        >
                            <Text style={styles.label}>Comment</Text>
                        </TouchableOpacity>
                    </View>

                    {activeTab === "rating" ? (
                        <ScrollView style={styles.questionsWrapper}>
                            {questions.map((q) => (
                                <View key={q.id} style={styles.questionBox}>
                                    <Text style={styles.questionText}>{q.text}</Text>
                                    {q.options.map((opt, idx) => (
                                        <TouchableOpacity
                                            key={idx}
                                            style={styles.option}
                                            onPress={() => handleSelect(q.id, opt)}
                                        >
                                            <View style={styles.radioCircle}>
                                                {answers[q.id] === opt && <View style={styles.radioSelected} />}
                                            </View>
                                            <Text style={styles.optionText}>{opt}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            ))}
                        </ScrollView>
                    ) : (
                        <View style={styles.commentBox}>
                            <TextInput
                                style={styles.commentInput}
                                multiline
                                placeholder="Type here"
                                placeholderTextColor="rgba(162, 154, 181, 1)"
                                value={comment}
                                onChangeText={setComment}
                            />

                            <View style={styles.checkboxContainer}>
                                <Checkbox
                                    style={styles.checkbox}
                                    value={isChecked}
                                    onValueChange={setChecked}
                                    color={isChecked ? '#ffffffff' : undefined}
                                />
                                <Text style={styles.checkboxLabel}>Post as Anonymous</Text>
                            </View>

                            <TouchableOpacity style={styles.submitButton}>
                                <Text style={styles.submitButtonText}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
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
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
        backgroundColor: "rgba(134, 154, 231, 1)",
        overflow: "hidden",
    },
    cell: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 8,
    },
    borderRight: {
        borderRightWidth: 1,
        borderRightColor: "#ffffff",
    },
    label: {
        fontSize: 18,
        fontWeight: "600",
        color: "#ffffff"
    },
    activeTab: {
        backgroundColor: "rgba(104, 120, 180, 1)",
    },
    questionsWrapper: {
        marginTop: 20,
    },
    questionBox: {
        backgroundColor: "rgba(247, 243, 255, 1)",
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
    },
    questionText: {
        fontSize: 14,
        color: "rgba(30, 39, 73, 1)",
        marginBottom: 10,
    },
    option: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    optionText: {
        fontSize: 14,
        color: "rgba(30, 39, 73, 1)",
        marginLeft: 8,
    },
    radioCircle: {
        height: 15,
        width: 15,
        borderRadius: 9,
        borderWidth: 2,
        borderColor: "rgba(30, 39, 73, 1)",
        alignItems: "center",
        justifyContent: "center",
    },
    radioSelected: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: "#311616ff",
    },
    commentBox: {
        marginTop: 20,
        borderRadius: 10,
    },
    commentLabel: {
        fontSize: 16,
        color: "#ffffff",
        marginBottom: 10,
    },
    commentInput: {
        backgroundColor: "#ffffff",
        color: "#000000",
        borderRadius: 8,
        padding: 10,
        minHeight: 300,
        maxHeight: 300,
        fontSize: 18,
        width: "100%",
        textAlignVertical: "top",
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
    },
    checkbox: {
        marginRight: 8,
        color: "#ffffff",
    },
    checkboxLabel: {
        fontSize: 14,
        color: "#ffffff",
    },
    submitButton: {
        backgroundColor: "rgba(104, 120, 180, 1)",
        paddingVertical: 8,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 20,
        width: "50%",
        alignSelf: "center",
    },
    submitButtonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "600",
    },
});
