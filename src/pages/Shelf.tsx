import React from "react";
import Layout from "../components/Layout";
import SearchInput from "../components/SearchInput";


const Shelf: React.FC = () => (
  <Layout>
    <div className="search-page-header">
        <h1 className="search-title">Shelf</h1>

        <SearchInput
          placeholder="Search"
          // value={searchValue}
          // onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
  </Layout>
);

export default Shelf;
