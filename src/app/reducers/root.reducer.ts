import { jokeReducer, JokeState } from "./joke.reducer";

export interface AppState {
  joke: JokeState;
}

export const selectJoke = (state: AppState): string =>
  state.joke.randomJoke.data.value;
export const setCategoryList = (state: AppState): Array<string> =>
  state.joke.categoriesList.list;
export const selectJokeFromCategory = (state: AppState): string =>
  state.joke.randomJokeFromCategory.data.value;
export const selectSearchedJoke = (state: AppState): Array<string> =>
  state.joke.searchedJoke.list;

export default {
  joke: jokeReducer
};
