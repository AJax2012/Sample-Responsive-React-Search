import React from "react";
import { User } from "../types";

export type DropdownProps = {
  users: User[];
  handleSelect: (id: string) => void;
};

export const Dropdown: React.FC<DropdownProps> = ({ users, handleSelect }) => (
  <section id="usersDropdown" role="listbox">
    {users?.length > 0 && (
      <ul
        role="list"
        className="px-3.5 py-1 z-10 w-full rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        aria-orientation="vertical"
      >
        {users.map((user) => (
          <li
            key={user.id}
            className="hover:bg-gray-200 py-0.5 hover:cursor-pointer"
            onClick={() => handleSelect(user.id)}
          >
            {user.name}
          </li>
        ))}
      </ul>
    )}
  </section>
);
