import React, { useState } from "react";
import { Nav } from "./components/Nav";
import { ImageAccordion } from "./components/ImageAccordion";
import { Cards } from "./components/Cards";
import { Footer } from "./components/Footer";

export const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Nav onSearch={handleSearch} />
      <ImageAccordion />
      <Cards searchQuery={searchQuery} />
      <Footer />
    </>
  );
};
