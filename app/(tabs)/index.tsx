import { useState } from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { Button } from "react-native";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";

export default function HomeScreen() {
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [showAns, setShowAns] = useState(false);

  const display = async () => {
    let response = await fetch("https://riddles-api.vercel.app/random");
    let data = await response.json();
    setQuestion(data.riddle);
    setAnswer(data.answer);
    setShowAns(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text
          style={{ fontSize: 35, backgroundColor: "transparent", padding: 15 }}
        >
          Riddle Generator:
        </Text>
      </View>
      <View style={styles.x}>
        <View style={{ flex: 4 }}>
          <Text style={{ fontSize: 20, fontFamily: "monospace" }}>
            Question:
            {question}
          </Text>
          {showAns ? (
            <Text style={{ fontSize: 20, fontFamily: "monospace" }}>
              Answer: {answer}
            </Text>
          ) : (
            <Text></Text>
          )}
        </View>
        <View
          style={{
            padding: 10,
            flex: 1,
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity
            onPress={display}
            style={{
              backgroundColor: "#F95454",
              padding: 10,
              borderRadius: 15,
            }}
          >
            Generate
          </TouchableOpacity>

          <TouchableOpacity
            disabled={showAns}
            onPress={() => {
              setShowAns(true);
            }}
            style={{
              backgroundColor: "#F95454",
              padding: 10,
              borderRadius: 15,
            }}
          >
            Answer
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#0D92F4",
    padding: 15,
    alignItems: "center",
  },
  paragraph: {
    margin: 8,
    fontSize: 40,
    textAlign: "center",
  },
  h1: {
    margin: 28,
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },
  h2: {
    margin: 16,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {},
  x: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "#7AB2D3",
    padding: 20,
    borderRadius: 15,
    borderColor: "black",
    width: 400,
    height: 200,
    fontSize: 15,
    textAlign: "center",
    fontFamily: "monospace",
  },
});
