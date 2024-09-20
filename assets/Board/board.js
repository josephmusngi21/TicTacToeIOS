import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function board() {
  const rows = 3;
  const column = 3;

  const board = Array.from({ length: rows }, () => Array(columns).fill(null));
  return <div></div>;
}

const style = StyleSheet;
