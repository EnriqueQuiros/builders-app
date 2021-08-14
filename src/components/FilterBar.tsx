export interface FilterBarProps {
  onFilter(filterText: string): void;
}

const FilterBar: React.FC<FilterBarProps> = (props) => {
  return (
    <>
      <div className="flex flex-wrap justify-between max-w-md mx-auto  bg-white rounded-lg shadow-lg mt-8 p-6">
        
        <div>
          Excavation
          <input className="hidden" type="checkbox" id="toggle_1" value="1" />
          <label
            className="flex items-center justify-start w-10 border border-gray-400 h-6 p-1 rounded-full cursor-pointer"
            htmlFor="toggle_1"
          >
            <span className="w-4 h-4 bg-gray-400 rounded-full"></span>
          </label>
        </div>
        
        <div>
          Plumbing
          <input className="hidden" type="checkbox" id="toggle_2" value="1" />
          <label
            className="flex items-center justify-start w-10 border border-gray-400 h-6 p-1 rounded-full cursor-pointer"
            htmlFor="toggle_2"
          >
            <span className="w-4 h-4 bg-gray-400 rounded-full"></span>
          </label>
        </div>

        <div>
          Electrical
          <input className="hidden" type="checkbox" id="toggle_3" value="1" />
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
