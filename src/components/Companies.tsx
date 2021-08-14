import React from "react";
import ICompany from "../interfaces";
import Company from "./Company";
import { useGetCompanies } from "../hooks/useGetCompanies";
import SearchBar from "./SearchBar";

const Companies = () => {
  const { data, status } = useGetCompanies();
  const [searchText, setSearchText] = React.useState("");

  const search = (newText: string) => setSearchText(newText);

  React.useEffect(() => {
    console.log("SEARCH ", searchText);
  }, [searchText]);

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-700 mt-6">Companies</h1>

      <SearchBar onSearch={search} />

      {status === "error" && <div>Error fetching data</div>}

      {status === "loading" && <div>Loading data...</div>}

      {status === "success" && (
        <div>
          {data?.map((company: ICompany) => (
            <Company key={company.name} {...company} />
          ))}
        </div>
      )}
    </>
  );
};

export default Companies;
