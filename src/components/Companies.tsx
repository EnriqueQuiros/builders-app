import React from "react";
import ICompany from "../interfaces";
import Company from "./Company";
import { useGetCompanies } from "../hooks/useGetCompanies";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";

const Companies = () => {
  const { data, status } = useGetCompanies();
  const [filterText, setFilterText] = React.useState("");
  const [filterSpecialty, setFilterSpecialty] = React.useState<string[]>(["excavation","plumbing","electrical",]);

  const filteredCompanies = data?.filter(
    (item) =>
      item.name.toLocaleLowerCase().includes(filterText) &&
      item.specialties.some((specialty) => filterSpecialty.includes(specialty))
  );

  const companyList = filteredCompanies ? filteredCompanies : data;

  return (
    <div className="bg-gray-100 ">
      <h1 className="text-2xl font-bold text-center  pt-6">
        Building companies
      </h1>

      <SearchBar onSearch={setFilterText} />
      <FilterBar specialties={filterSpecialty} onFilter={setFilterSpecialty} />

      {status === "error" && <div>Error fetching data</div>}

      {status === "loading" && <div>Loading data...</div>}

      {status === "success" && (
        <div>
          {!filteredCompanies?.length && (
            <div>No companies fit with the filter criteria</div>
          )}

          {companyList?.map((company: ICompany) => (
            <Company key={company.name} {...company} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Companies;
