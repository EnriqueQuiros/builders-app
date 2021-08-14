import React from "react";
import ICompany from "../interfaces";
import Company from "./Company";
import { useGetCompanies } from "../hooks/useGetCompanies";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";

const Companies = () => {
  const { data, status } = useGetCompanies();
  const [searchText, setSearchText] = React.useState("");
  

  const search = (newSearch: string) => setSearchText(newSearch);

  React.useEffect(() => {
    console.log("SEARCH ", searchText);
  }, [searchText]);

  return (
    <div className="bg-gray-100 ">
      <h1 className="text-2xl font-bold  pt-6">Companies</h1>

      <SearchBar onSearch={search} />
      <FilterBar onFilter={search}/>

      {status === "error" && <div>Error fetching data</div>}

      {status === "loading" && <div>Loading data...</div>}

      {status === "success" && (
        <div>
          {data?.map((company: ICompany) => (
            <Company key={company.name} {...company} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Companies;
