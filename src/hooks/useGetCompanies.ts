import { useQuery } from "react-query";
import ICompany from "../interfaces";








const fetchCompanies = async () => {
  const response = await fetch("http://localhost:5000/companies");
  return response.json();
};


function fetchCompanies2():Promise<ICompany[]> {
  return  fetch("http://localhost:5000/companies").then((response)=>response.json());
};

export const useGetCompanies = () => {

  return useQuery("companies", fetchCompanies2);

};
