// import { cleanup } from '@testing-library/react';
// import React, { useEffect } from 'react'

// export default function GenericMedicine() {

//   let API = "http://localhost:3065/"

//   const fetchApiData = async (url) => {
//     try {
//       const res = fetch(url);
//     } catch (error) {
//       console.log(error); 
//     }
//   }

//   useEffect(() => {
//     fetchApiData(API);
//   },[]);

//   return (
//     <div>GenericMedicine</div>
//   )
// }






import { cleanup } from '@testing-library/react';
import React, { useEffect } from 'react';

export default function GenericMedicine() {
  let API = "http://localhost:3065/";

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url); // Await the fetch call
      // Process the response as needed
    } catch (error) {
      console.log(error); 
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  return (
    <div>GenericMedicine</div>
  );
}
