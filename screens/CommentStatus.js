import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HamburgerMenu from "../components/HamburgerMenu";

export default function CommentStatusScreen({ route }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <HamburgerMenu stickyHeaderIndices={[0]} />
        <View>
          <Text>Comment Status</Text>
          <Text>Your submitted comments will be reviewed by the admin. You will be notified once they are approved.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});
