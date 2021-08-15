import SpecialtyToggle from "./SpecialtyToggle";
export interface Props {
  specialties: string[];
  onFilter(filterSpecialty: string[]): void;
}

const FilterBar = (props: Props) => {
  return (
    <>
      <div className="flex flex-wrap justify-between max-w-md mx-auto  bg-white rounded-lg shadow-lg mt-8 p-6">
        <SpecialtyToggle
          specialties={props.specialties}
          onFilter={props.onFilter}
          name="excavation"
        />
        <SpecialtyToggle
          specialties={props.specialties}
          onFilter={props.onFilter}
          name="plumbing"
        />
        <SpecialtyToggle
          specialties={props.specialties}
          onFilter={props.onFilter}
          name="electrical"
        />
      </div>
    </>
  );
};

export default FilterBar;
