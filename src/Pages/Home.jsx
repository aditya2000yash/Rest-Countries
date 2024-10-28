import React, { useEffect, useState } from "react";
import FilterBar from "../components/FilterBar";
import CardsList from "../components/CardsList";

// Import utility functions
import { filterData, sortData, fetchData } from "../utilities/utils";

const HomePage = () => {
  const [cardsdata, setCardsData] = useState([]);
  const [region, setRegion] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [subregion, setSubregion] = useState([]);
  const [selectedSubregion, setSelectedSubregion] = useState("");
  const [sortByAreaPopulation, setSortByAreaPopulation] = useState("");
  const [sortFeild, setSortFeild] = useState("");

  const selectHandler = (e) => {
    setSelectedRegion(e.target.value);
    setSelectedSubregion(""); // Reset's the subregion when a new region is selected

    let getSubregion = cardsdata.reduce((acc, item) => {
      if (item.region === e.target.value && !acc.includes(item.subregion)) {
        acc.push(item.subregion);
      }
      return acc;
    }, []);

    setSubregion(getSubregion);
  };

  const subregionSelect = (e) => setSelectedSubregion(e.target.value);

  const sortFieldFunction = (e) => {
    setSortByAreaPopulation(e.target.value);
    setSortFeild("");
  };

  const sortFunctionByValue = (e) => setSortFeild(e.target.value);

  // Use the utility function to filter data
  let filteredResponse = filterData(cardsdata, inputSearch, selectedRegion, selectedSubregion);

  // Use the utility function to sort data
  filteredResponse = sortData(filteredResponse, sortByAreaPopulation, sortFeild);

  const url = import.meta.env.VITE_URL;

  useEffect(() => {
    setTimeout(() => {
      fetchData(url, setCardsData, setRegion);
    }, 500);
  }, []);

  return (
    <>
      <FilterBar
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
        selectedRegion={selectedRegion}
        selectHandler={selectHandler}
        region={region}
        selectedSubregion={selectedSubregion}
        subregionSelect={subregionSelect}
        subregion={subregion}
        sortByAreaPopulation={sortByAreaPopulation}
        sortFieldFunction={sortFieldFunction}
        sortFeild={sortFeild}
        sortFunctionByValue={sortFunctionByValue}
      />
      <CardsList filteredResponse={filteredResponse} />
    </>
  );
};

export default HomePage;
