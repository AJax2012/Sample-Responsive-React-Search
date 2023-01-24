import React, { useMemo } from "react";
import { User } from "../types";

export type SelectedUserProps = {
  user: User;
};

export const SelectedUser: React.FC<SelectedUserProps> = ({ user }) => {
  const userAddress = useMemo(() => {
    encodeURI(`${user.address},${user.city},${user.postalZip},${user.country}`);
  }, [user]);

  return (
    <div className="origin-top rounded-md p-4 bg-gray-50 w-full">
      <h2 className="text-lg font-bold">{user.name}</h2>
      <address className="text-sm">
        <a href={`mailto:${user.email}`} className="block">
          Email:{" "}
          <span className="hover:underline decoration-sky-600 decoration-2">
            {user.email}
          </span>
        </a>
        <a href={`tel:${user.phone}`} className="block">
          Phone Number:{" "}
          <span className="hover:underline decoration-sky-600 decoration-2">
            {user.phone}
          </span>
        </a>
        <h3 className="mt-3 font-semibold not-italic text-base">Address:</h3>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${userAddress}`}
          className="hover:underline decoration-sky-600 decoration-2"
        >
          <div>{user.address}</div>
          <div>
            {user.city}, {user.postalZip}, {user.country}
          </div>
        </a>
      </address>

      <div className="text-sm italic text-red-500">
        Note: this is made up data and none of the links will work.
      </div>
    </div>
  );
};
