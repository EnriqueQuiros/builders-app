import ICompany from "../interfaces";
import Company from "./Company";
import { useGetCompanies } from "../hooks/useGetCompanies";

const Companies = () => {
  const { data, status } = useGetCompanies();

  return (
    <>
      <h2>Companies</h2>
      <p>Status: {status}</p>

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
