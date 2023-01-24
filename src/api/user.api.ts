import { data } from "./data";
import { User } from "../types";

export const getUsersFromApi = (
  query: string,
  signal?: AbortSignal
): Promise<User[]> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (signal?.aborted) {
        reject(signal.reason);
      }

      resolve(
        data.filter((user) =>
          user.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        )
      );
    }, 2000);
  });
