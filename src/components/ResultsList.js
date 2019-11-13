import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { withNavigation } from "react-navigation";
import ResultsDetail from "../components/ResultsDetail";

const ResultsList = ({ title, results, navigation }) => {
  return (
    <>
      {!results.length ? null : (
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={result => result.id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("SeeMore", { id: item.id })
                  }
                >
                  <ResultsDetail result={item} />
                </TouchableOpacity>
              );
            }}
          ></FlatList>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginLeft: 15,
    marginBottom: 5
  }
});

export default withNavigation(ResultsList);
