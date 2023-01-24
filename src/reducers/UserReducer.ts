import { Action, ActionType, User, UserState } from "../types";

export const initialState: UserState = {
  query: "",
  debounceValue: 500,
  users: [],
  selectedUser: undefined,
  isLoading: false,
  errorMessage: undefined,
};

export const UserReducer = (state: UserState, action: Action): UserState => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.UPDATE_QUERY:
      return {
        ...state,
        isLoading: true,
        query: payload as string,
      };
    case ActionType.SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: payload as User[],
        errorMessage: undefined,
      };
    case ActionType.ERROR:
      return {
        ...state,
        isLoading: false,
        users: [],
        errorMessage: payload as string,
      };
    case ActionType.USER_SELECTED:
      return {
        ...state,
        isLoading: false,
        selectedUser: state.users.find(
          (user) => user.id == (payload as string)
        ),
        users: [],
        errorMessage: undefined,
      };
    default:
      throw new Error("Action unavailable.");
  }
};
