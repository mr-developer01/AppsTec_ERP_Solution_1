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
  console.log(page)
  const {authorData, totalLength} = useControlData(limit, page, setLimit);
  

  return (
    <>
      <ImageGrid authorData={authorData} />
      <PaginationButton page={page} setPage={setPage} totalLength={totalLength} />
    </>
  );
};

export default App;
