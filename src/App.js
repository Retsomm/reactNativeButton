import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image
} from "react-native";

export default function App() {
  // 定義useState
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("grey");
  // 定義邏輯
  const Increment = () => setCount(count + 1);
  const Decrement = () => setCount(count - 1);
  const getCountText = () => {
    if (count < 10) {
      return "數量不足10了!";
    } else if (count < 20) {
      return "數量不足20了!";
    } else {
      return "還剩很多喔!!!";
    }
  };
  const printlightpink = () => {
    setBackgroundColor("lightpink");
  };
  const printskyblue = () => {
    setBackgroundColor("skyblue");
  };
  // 渲染
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Button title="+" onPress={() => Increment()} />
      <Text style={styles.num}>{count}</Text>
      <Button title="-" onPress={() => Decrement()} />
      <Text style={styles.text}>{getCountText()}</Text>
      <TouchableOpacity onPress={() => printlightpink()}>
        <Image
          style={{ width: 150, height: 150 }}
          source={require("./img/grogu.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => printskyblue()}>
        <Image
          style={{ width: 150, height: 150 }}
          source={require("./img/grogu2.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    color: "#fff"
  },
  num: {
    fontSize: 50,
    padding: 10,
    color: "#fff"
  },
  text: {
    width: 300,
    textAlign: "center",
    padding: 5,
    fontSize: 20,
    borderBottomWidth: 2,
    borderColor: "#fff",
    color: "#fff",
    marginTop: 10
  }
});
