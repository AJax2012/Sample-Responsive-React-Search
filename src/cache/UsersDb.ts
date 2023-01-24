import { openDB, DBSchema } from "idb";
import { User } from "../types";

const databaseName = "usersDB";
const storeName = "users";

interface UsersDbV1 extends DBSchema {
  users: {
    value: User[];
    key: string;
  };
}

const db = await openDB<UsersDbV1>(databaseName, 1, {
  upgrade(db) {
    db.createObjectStore(storeName);
  },
});

export const addUserQuery = async (query: string, users: User[]) => {
  if (!(await db.get(storeName, query))) {
    await db.add(storeName, { ...users }, query);
  }
};

export const getUsersFromCache = async (query: string) => {
  const response = await db.get(storeName, query);
  if (!response) {
    return null;
  }

  console.info("retrieved results from cache for query:", query);
  return Object.values(response);
};
