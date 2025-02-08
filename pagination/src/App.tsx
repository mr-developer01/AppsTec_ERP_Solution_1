import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { AuthorContex } from "./store/authorContext";
import Table from "./components/table";
import ImageGrid from "./components/ImageGrid";
import { useControlData } from "./hooks/useControlData";

const App = () => {
  const [limit, setLimit] = useState(10);
  const authorData = useControlData(limit);

  console.log(authorData);
  

  return (
    <>
      <ImageGrid authorData={authorData} />
    </>
  );
};

export default App;
