import { User } from "../types";
import { Dropdown } from "./Dropdown";
import { Loader } from "./Loader";
import { SearchIcon } from "./SearchIcon";

export type SearchFieldProps = {
  isLoading: boolean;
  users: User[];
  handleInputChange: (query: string) => void;
  handleUserSelected: (id: string) => void;
};

export const SearchField: React.FC<SearchFieldProps> = ({
  isLoading,
  users,
  handleInputChange,
  handleUserSelected,
}) => (
  <fieldset className="block w-full mb-4">
    <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold">
      Full Name
      <div className="relative mt-2">
        <SearchIcon align="left" />
        <input
          name="fullName"
          id="fullName"
          type="text"
          autoComplete="name"
          role="combobox"
          aria-label="Full Name"
          className="block w-full pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-gray-500 focus:border-gray-500"
          onChange={(e) => handleInputChange(e.target.value)}
        />
        {isLoading && <Loader align="right" />}
      </div>
    </label>
    <Dropdown users={users} handleSelect={handleUserSelected} />
  </fieldset>
);
