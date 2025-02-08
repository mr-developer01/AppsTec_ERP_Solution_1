import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { AuthorContex } from "./store/authorContext";
import Table from "./components/table";
import ImageGrid from "./components/ImageGrid";
import { useControlData } from "./hooks/useControlData";
import PaginationButton from "./components/PaginationButton";

const App = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const authorData = useControlData(limit, page);

  // console.log(authorData);
  

  return (
    <>
      <ImageGrid authorData={authorData} />
      <PaginationButton />
    </>
  );
};

export default App;
