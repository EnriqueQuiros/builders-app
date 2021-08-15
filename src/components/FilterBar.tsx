import React from "react";

export interface Props {
  specialties: string[];
  onFilter(filterSpecialty: string[]): void;
}

const FilterBar = (props: Props) => {
  const ToggleSpecialty = (e: any, filter: string) => {
    let specialties = props.specialties;

    if (props.specialties.includes(filter)) {
      specialties = specialties.filter((e) => e !== filter);
    } else {
      specialties.push(filter);
    }
    props.onFilter([...specialties]);
  };

  return (
    <>
      <div className="flex flex-wrap justify-between max-w-md mx-auto  bg-white rounded-lg shadow-lg mt-8 p-6">
        <div>
          Excavation
          <input
            checked={props.specialties.includes("excavation")}
            onChange={(e) => ToggleSpecialty(e, "excavation")}
            className="hidden"
            type="checkbox"
            id="toggle_1"
            value="1"
          />
          <label
            className="flex items-center justify-start w-10 border border-gray-400 h-6 p-1 rounded-full cursor-pointer"
            htmlFor="toggle_1"
          >
            <span className="w-4 h-4 bg-gray-400 rounded-full"></span>
          </label>
        </div>

        <div>
          Plumbing
          <input
            checked={props.specialties.includes("plumbing")}
            onChange={(e) => ToggleSpecialty(e, "plumbing")}
            className="hidden"
            type="checkbox"
            id="toggle_2"
            value="1"
          />
          <label
            className="flex items-center justify-start w-10 border border-gray-400 h-6 p-1 rounded-full cursor-pointer"
            htmlFor="toggle_2"
          >
            <span className="w-4 h-4 bg-gray-400 rounded-full"></span>
          </label>
        </div>

        <div>
          Electrical
          <input
            checked={props.specialties.includes("electrical")}
            onChange={(e) => ToggleSpecialty(e, "electrical")}
            className="hidden"
            type="checkbox"
            id="toggle_3"
            value="1"
          />
          <label
            className="flex items-center justify-start w-10 border border-gray-400 h-6 p-1 rounded-full cursor-pointer"
            htmlFor="toggle_3"
          >
            <span className="w-4 h-4 bg-gray-400 rounded-full"></span>
          </label>
        </div>
      </div>
    </>
  );
};

export default FilterBar;
