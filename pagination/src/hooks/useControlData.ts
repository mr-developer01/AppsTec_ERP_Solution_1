import { useEffect, useState } from "react";

export const useControlData = (limit, page) => {
  const [authorData, setAuthorData] = useState(null);
  const showData = page * limit;

  const limitData = (page + 1) * limit;
  
  useEffect(() => {
    const fetchUserData = async () => {
      const bufferData = await fetch(
        "https://picsum.photos/v2/list?page=2&limit=100"
      );

      const readableData = await bufferData.json();

      page === 0 && setAuthorData(readableData.slice(showData, limitData));
      page > 0 && setAuthorData(readableData.slice(showData + 1, limitData + 1));
    };
    fetchUserData()
  }, []);

  return authorData
};
