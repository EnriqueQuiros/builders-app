import ICompany from "../interfaces";
import { ReactComponent as MapPinIcon } from "../assets/mapPinIcon.svg";

const Company: React.FC<ICompany> = (company) => {
  return (
    <>
      <div className="flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg mt-10">
        <div className="w-1/3 bg-cover">
          <img
            src="https://placekitten.com/300/300"
            alt={company.name}
            className="shadow-lg rounded max-w-full h-auto align-middle border-none"
          />
        </div>

        <div className="w-2/3 p-4 md:px-4  md:py-2">
          <h1 className="text-2xl font-bold text-gray-700">{company.name}</h1>

          <div className="flex  mt-3 mb-3   item-center">
            {company.specialties?.map((specialty: string) => (
              <span className="inline-block rounded-full text-gray-600 bg-gray-100 px-2 py-1 text-xs font-bold mr-3">
                {specialty}
              </span>
            ))}
          </div>

          <div className="flex items-center mt-6 text-gray-700 ">
            <MapPinIcon />
            <h1 className="px-2 text-sm"> {company.city}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
