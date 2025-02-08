import { useEffect, useState } from "react";

export const useControlData = (limit) => {
  const [authorData, setAuthorData] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      const bufferData = await fetch(
        "https://picsum.photos/v2/list?page=2&limit=100"
      );

      const readableData = await bufferData.json();

      setAuthorData(readableData);
    };
    fetchUserData()
  }, []);

  return authorData;
};
