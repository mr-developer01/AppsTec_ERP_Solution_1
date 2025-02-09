import { useEffect, useState } from "react";

export const useControlData = (limit, page, setLimit) => {
  const [authorData, setAuthorData] = useState(null);
  const [totalLength, setTotalLength] = useState(0);
  // let totalLength;
  const showData = (page - 1) * limit;

  const limitData = (page) * limit;
  
  useEffect(() => {
    const fetchUserData = async () => {
      const bufferData = await fetch(
        "https://picsum.photos/v2/list?page=2&limit=100"
      );

      const readableData = await bufferData.json();
      setTotalLength(readableData.length);

      page === 1 && setAuthorData(readableData.slice(showData, limitData));
      page > 1 && setAuthorData(readableData.slice(showData + 1, limitData + 1));
    };
    fetchUserData()
  }, [page]);

  console.log(totalLength, "useControllData") ;

  return {authorData, totalLength}
};
