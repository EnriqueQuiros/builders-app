export interface Props {
  specialties: string[];
  onFilter(filterSpecialty: string[]): void;
  name: string;
}

const SpecialtyToggle = (props: Props) => {
  const ToggleSpecialty = (filter: string) => {
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
      <div className="capitalize">
        <span className=" text-sm">{props.name}</span>
        <input
          checked={props.specialties.includes(props.name)}
          onChange={() => ToggleSpecialty(props.name)}
          data-testid= {"toggle-" + props.name}
          className="hidden"
          type="checkbox"
          id={props.name}
        />
        <label
          className="flex items-center pt-2 mt-2 justify-start w-10 border border-gray-400 h-6 p-1 rounded-full cursor-pointer"
          htmlFor={props.name}
        >
          <span className="w-4 h-4 bg-gray-400 rounded-full"></span>
        </label>
      </div>
    </>
  );
};

export default SpecialtyToggle;
