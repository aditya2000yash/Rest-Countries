const FilterBar = ({
  inputSearch,
  setInputSearch,
  selectedRegion,
  selectHandler,
  region,
  selectedSubregion,
  subregionSelect,
  subregion,
  sortByAreaPopulation,
  sortFieldFunction,
  sortFeild,
  sortFunctionByValue,
  currencies,
  selectedCurrency,
  currencySelect,
}) => {
  return (
    <div className="flex justify-around items-center px-[10rem] max-sm:px-3 mt-6 max-md:flex-col font-[600] max-md:gap-2 overflow-hidden flex-wrap gap-2">

      <div className="flex relative justify-center items-center ">
        <input
          type="text"
          className="shadow-lg rounded-md p-2 pl-8 search-input h-[3rem] w-[30vw] max-md:w-[70vw] max-sm:mt-2 outline-none"
          placeholder="Search for a country..."
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
        />
        <i className="fa-solid fa-magnifying-glass absolute left-2 max-sm:top-[1.5rem]"></i>
      </div>

      <select
        className="px-7 shadow-lg h-[3rem] rounded-md region-filter max-md:w-[70vw] max-sm:mt-2"
        onChange={selectHandler}
        value={selectedRegion}
      >
        <option value="">Regions</option>
        {region.map((item, idx) => (
          <option key={idx}>{item}</option>
        ))}
      </select>

      <select
        className="px-7 shadow-lg h-[3rem] rounded-md region-filter max-md:w-[70vw] max-sm:mt-2"
        onChange={subregionSelect}
        value={selectedSubregion}
      >
        <option value="">Sub Region</option>
        {subregion.map((item, idx) => (
          <option key={idx}>{item}</option>
        ))}
      </select>

      <select
        className="px-7 shadow-lg h-[3rem] rounded-md region-filter max-md:w-[70vw] max-sm:mt-2"
        onChange={sortFieldFunction}
        value={sortByAreaPopulation}
      >
        <option value="">Sort By</option>
        <option value="population">Population</option>
        <option value="area">Area</option>
      </select>

      <select
        className="px-7 shadow-lg h-[3rem] rounded-md region-filter max-md:w-[70vw] max-sm:mt-2"
        onChange={sortFunctionByValue}
        value={sortFeild}
      >
        <option value="">Sort By</option>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
      </select>

      {/* Currency Dropdown */}
      <select
        className="px-7 shadow-lg h-[3rem] rounded-md region-filter max-md:w-[70vw] max-sm:mt-2"
        onChange={currencySelect}
        value={selectedCurrency}
      >
        <option value="All">All Currencies</option>
        {currencies.map((currency, idx) => (
          <option key={idx} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar; 

// src/components/FilterBar.jsx

