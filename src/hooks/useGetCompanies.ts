import { useQuery } from "react-query";
import ICompany from "../interfaces";

function fetchCompanies(): Promise<ICompany[]> {
  return fetch("http://localhost:5000/companies").then((response) =>
    response.json()
  );
}

export const useGetCompanies = () => {
  return useQuery("companies", fetchCompanies);
};
