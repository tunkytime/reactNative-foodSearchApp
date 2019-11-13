import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const SeeMoreDetail = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  console.log(result);

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  return (
    <>
      {!result ? null : (
        <>
          <FlatList
            data={result.photos}
            keyExtractor={photo => photo}
            renderItem={({ item }) => {
              return <Image style={styles.image} source={{ uri: item }} />;
            }}
          ></FlatList>
          <Text>{result.name}</Text>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120
  }
});

export default SeeMoreDetail;
