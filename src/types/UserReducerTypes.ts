import { User } from "./User";

export type UserState = {
  query: string;
  debounceValue: number;
  users: User[];
  selectedUser?: User;
  isLoading: boolean;
  errorMessage?: string;
};

export enum ActionType {
  UPDATE_QUERY = "UPDATE QUERY",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  USER_SELECTED = "USER SELECTED",
}

export type Action = {
  type: ActionType;
  payload: string | User[];
};
