// Function to filter data based on input search, region, and subregion
export const filterData = (cardsdata, inputSearch, selectedRegion, selectedSubregion) => {
  return cardsdata
    .filter(
      (item) =>
        inputSearch === "" ||
        item.name.common.toLowerCase().includes(inputSearch.toLowerCase())
    )
    .filter((item) => selectedRegion === "" || item.region === selectedRegion)
    .filter(
      (item) => selectedSubregion === "" || item.subregion === selectedSubregion
    );
};

// Function to sort data based on population or area
export const sortData = (filteredResponse, sortByAreaPopulation, sortFeild) => {
  if (sortFeild) {
    if (sortByAreaPopulation === "population") {
      return sortFeild === "low"
        ? filteredResponse.sort((a, b) => a.population - b.population)
        : filteredResponse.sort((a, b) => b.population - a.population);
    } else {
      return sortFeild === "low"
        ? filteredResponse.sort((a, b) => a.area - b.area)
        : filteredResponse.sort((a, b) => b.area - a.area);
    }
  }
  return filteredResponse;
};

// Function to fetch data from API
export const fetchData = async (url, setCardsData, setRegion ,setError) => {
  try {
    const res = await fetch(`${url}/all`);
    if (!res.ok) throw new Error("Network response was not ok");
    const data = await res.json();
    
    setCardsData(data);

    // Get unique regions from data
    let getRegion = data.reduce((acc, item) => {
      if (!acc.includes(item.region)) acc.push(item.region);
      return acc;
    }, []);
    setRegion(getRegion);
  } catch (error) {
    setError(()=>error)
  }
};

