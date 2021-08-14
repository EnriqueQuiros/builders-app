import ICompany from "../interfaces";

const Company: React.FC<ICompany> = (company) => {
  return (
    <>
      Company!
      {company.name}
    </>
  );
};

export default Company;
