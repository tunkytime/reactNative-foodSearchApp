import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi, results, error] = useResults();

  const filterResultsByPrice = price => {
    return results.filter(results => {
      return results.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={searchTerm}
        onTermChange={setSearchTerm}
        onTermSubmit={() => searchApi(searchTerm)}
      />
      {error ? <Text>{error}</Text> : null}
      <Text style={{ marginLeft: 15 }}>We found {results.length} results</Text>
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList
          results={filterResultsByPrice("$$")}
          title="Kinda Pricey"
        />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
