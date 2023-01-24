import { useEffect, useReducer } from "react";
import { SelectedUser, ErrorMessage, SearchField } from "./components";
import { ActionType, User } from "./types";
import { initialState, UserReducer } from "./reducers/UserReducer";
import { getUsersFromApi } from "./api";
import { useDebounceValue } from "./hooks/useDebounceValue";
import { getUsersFromCache, addUserQuery } from "./cache";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(UserReducer, initialState);
  const debounceQuery = useDebounceValue(state.query);
  const controller = new AbortController();

  useEffect(() => {
    const loadUsers = async () => {
      const signal = controller.signal;
      dispatch({ type: ActionType.UPDATE_QUERY, payload: debounceQuery });
      let users: User[] = [];

      try {
        users =
          (await getUsersFromCache(debounceQuery)) ??
          (await getUsersFromApi(debounceQuery, signal));
      } catch (err) {
        var error = err as Error;

        dispatch({
          type: ActionType.ERROR,
          payload: `Could not get users: ${error.message}`,
        });

        return;
      }

      if (users?.length) {
        await addUserQuery(debounceQuery, users);
        dispatch({ type: ActionType.SUCCESS, payload: users });
      } else {
        dispatch({ type: ActionType.ERROR, payload: "No users found" });
      }
    };

    if (debounceQuery.length > 1) {
      loadUsers();
    }
  }, [debounceQuery]);

  const handleUserSelected = (id: string) => {
    dispatch({ type: ActionType.USER_SELECTED, payload: id });
  };

  const handleInputChange = (query: string) => {
    dispatch({ type: ActionType.UPDATE_QUERY, payload: query });
  };

  return (
    <div className="container mx-auto">
      <form>
        <SearchField
          isLoading={state.isLoading}
          users={state.users}
          handleUserSelected={handleUserSelected}
          handleInputChange={handleInputChange}
        />
      </form>

      {state.errorMessage && <ErrorMessage errorMessage={state.errorMessage} />}

      {state.selectedUser && <SelectedUser user={state.selectedUser} />}
    </div>
  );
}

export default App;
