// import React from "react";
// import CardsContainer from "./CardsContainer";

// const CardsList = ({ filteredResponse }) => {
//   return (
//     <div className="flex mt-10 flex-wrap gap-10 justify-center items-center px-[1rem]">
//       {filteredResponse.length === 0 ? (
//         <p>No results found</p> // Handle no results case
//       ) : (
//         filteredResponse.map((item, idx) => (
//           <CardsContainer key={idx} item={item} />
//         ))
//       )}
//     </div>
    
//   );
  
// };

// export default CardsList;

import React from "react";
import CardsContainer from "./CardsContainer";

const CardsList = ({ filteredResponse }) => {
  return (
    <div className="flex mt-10 flex-wrap gap-10 justify-center items-center px-[1rem]">
      {filteredResponse.length === 0 ? (
        <p>No results found</p>
      ) : (
        filteredResponse.map((item, idx) => <CardsContainer key={idx} item={item} />)
      )}
    </div>
  );
};

export default CardsList;
