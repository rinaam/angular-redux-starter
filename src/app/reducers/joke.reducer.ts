import { Action } from "@ngrx/store";

export enum JokeActionType {
  GET_RANDOM_JOKE_ACTION = "GET_RANDOM_JOKE_ACTION",
  GET_RANDOM_JOKE_ACTION_SUCCESS = "GET_RANDOM_JOKE_ACTION_SUCCESS",
  GET_RANDOM_JOKE_ACTION_ERROR = "GET_RANDOM_JOKE_ACTION_ERROR",
  GET_CATEGORIES_LIST_ACTION = "GET_CATEGORIES_LIST_ACTION",
  GET_CATEGORIES_LIST_ACTION_SUCCESS = "GET_CATEGORIES_LIST_ACTION_SUCCESS",
  GET_CATEGORIES_LIST_ACTION_ERROR = "GET_CATEGORIES_LIST_ACTION_ERROR",
  GET_RANDOM_JOKE_FROM_CATEGORY_ACTION = "GET_RANDOM_JOKE_FROM_CATEGORY_ACTION",
  GET_RANDOM_JOKE_FROM_CATEGORY_ACTION_SUCCESS = "GET_RANDOM_JOKE_FROM_CATEGORY_ACTION_SUCCESS",
  GET_RANDOM_JOKE_FROM_CATEGORY_ACTION_ERROR = "GET_RANDOM_JOKE_FROM_CATEGORY_ACTION_ERROR",
  SET_SEARCH_JOKE_ACTION = "SET_SEARCH_JOKE_ACTION",
  SET_SEARCH_JOKE_ACTION_SUCCES = "SET_SEARCH_JOKE_ACTION_SUCCES",
  SET_SEARCH_JOKE_ACTION_ERROR = "SET_SEARCH_JOKE_ACTION_ERROR"
}

export interface JokeState {
  randomJoke: {
    data: any;
    pending: boolean;
    error: {
      hasError: boolean;
      message: string;
    };
  };

  categoriesList: {
    list: Array<string>;
    pending: boolean;
    error: {
      hasError: boolean;
      message: string;
    };
  };
  randomJokeFromCategory: {
    data: any;
    pending: boolean;
    error: {
      hasError: boolean;
      message: string;
    };
  };
  searchedJoke: {
    list: Array<string>;
    pending: boolean;
    error: {
      hasError: boolean;
      message: string;
    };
  };
}

export const initialState: JokeState = {
  randomJoke: {
    data: {},
    pending: false,
    error: {
      hasError: false,
      message: ""
    }
  },
  categoriesList: {
    list: [],
    pending: false,
    error: {
      hasError: false,
      message: ""
    }
  },
  randomJokeFromCategory: {
    data: {},
    pending: false,
    error: {
      hasError: false,
      message: ""
    }
  },
  searchedJoke: {
    list: [],
    pending: false,
    error: {
      hasError: false,
      message: ""
    }
  }
};

export function jokeReducer(state = initialState, action: JokeActions) {
  const { payload } = action;

  switch (action.type) {
    case JokeActionType.GET_RANDOM_JOKE_ACTION: {
      return {
        ...state,
        randomJoke: {
          ...state.randomJoke,
          pending: true
        }
      };
    }
    case JokeActionType.GET_RANDOM_JOKE_ACTION_SUCCESS: {
      return {
        ...state,
        randomJoke: {
          data: {
            value: payload.value
          },
          pending: false,
          error: {
            hasError: false,
            message: ""
          }
        }
      };
    }
    case JokeActionType.GET_RANDOM_JOKE_ACTION_ERROR: {
      return {
        ...state,
        randomJoke: {
          ...state.randomJoke,
          pending: false,
          error: {
            hasError: true,
            message: payload
          }
        }
      };
    }
    case JokeActionType.GET_CATEGORIES_LIST_ACTION: {
      return {
        ...state,
        categoriesList: {
          ...state.categoriesList,
          pending: true
        }
      };
    }
    case JokeActionType.GET_CATEGORIES_LIST_ACTION_SUCCESS: {
      return {
        ...state,
        categoriesList: {
          list: payload,
          pending: false,
          error: {
            hasError: false,
            message: ""
          }
        }
      };
    }
    case JokeActionType.GET_CATEGORIES_LIST_ACTION_ERROR: {
      return {
        ...state,
        categoriesList: {
          ...state.categoriesList,
          pending: false,
          error: {
            hasError: true,
            message: payload
          }
        }
      };
    }
    case JokeActionType.GET_RANDOM_JOKE_FROM_CATEGORY_ACTION: {
      return {
        ...state,
        randomJokeFromCategory: {
          ...state.randomJokeFromCategory,
          pending: true
        }
      };
    }
    case JokeActionType.GET_RANDOM_JOKE_FROM_CATEGORY_ACTION_SUCCESS: {
      return {
        ...state,
        randomJokeFromCategory: {
          data: {
            value: payload.value
          },
          pending: false,
          error: {
            hasError: false,
            message: ""
          }
        }
      };
    }
    case JokeActionType.GET_RANDOM_JOKE_FROM_CATEGORY_ACTION_ERROR: {
      return {
        ...state,
        randomJokeFromCategory: {
          ...state.randomJokeFromCategory,
          pending: false,
          error: {
            hasError: true,
            message: payload
          }
        }
      };
    }

    case JokeActionType.SET_SEARCH_JOKE_ACTION: {
      return {
        ...state,
        searchedJoke: {
          ...state.searchedJoke,
          pending: true
        }
      };
    }
    case JokeActionType.SET_SEARCH_JOKE_ACTION_SUCCES: {
      return {
        ...state,
        searchedJoke: {
          list: payload.result.map(joke => joke.value),
          pending: false,
          error: {
            hasError: false,
            message: ""
          }
        }
      };
    }
    case JokeActionType.SET_SEARCH_JOKE_ACTION_ERROR: {
      return {
        ...state,
        searchedJoke: {
          ...state.searchedJoke,
          pending: false,
          error: {
            hasError: true,
            message: payload
          }
        }
      };
    }

    default:
      return state;
  }
}

export class getRandomJokeAction implements Action {
  readonly type = JokeActionType.GET_RANDOM_JOKE_ACTION;
  constructor(public payload?: any) {}
}

export class getRandomJokeActionSuccess implements Action {
  readonly type = JokeActionType.GET_RANDOM_JOKE_ACTION_SUCCESS;
  constructor(public payload: any) {}
}
export class getRandomJokeActionError implements Action {
  readonly type = JokeActionType.GET_RANDOM_JOKE_ACTION_ERROR;
  constructor(public payload: any) {}
}

export class getCategoriesListAction implements Action {
  readonly type = JokeActionType.GET_CATEGORIES_LIST_ACTION;
  constructor(public payload?: any) {}
}
export class getCategoriesListActionSucces implements Action {
  readonly type = JokeActionType.GET_CATEGORIES_LIST_ACTION_SUCCESS;
  constructor(public payload: any) {}
}
export class getCategoriesListActionError implements Action {
  readonly type = JokeActionType.GET_CATEGORIES_LIST_ACTION_ERROR;
  constructor(public payload: any) {}
}

export class getRandomJokeFromCategoryAction implements Action {
  readonly type = JokeActionType.GET_RANDOM_JOKE_FROM_CATEGORY_ACTION;
  constructor(public payload?: string) {}
}
export class getRandomJokeFromCategoryActionSucces implements Action {
  readonly type = JokeActionType.GET_RANDOM_JOKE_FROM_CATEGORY_ACTION_SUCCESS;
  constructor(public payload: string) {}
}
export class getRandomJokeFromCategoryActionError implements Action {
  readonly type = JokeActionType.GET_RANDOM_JOKE_FROM_CATEGORY_ACTION_ERROR;
  constructor(public payload: string) {}
}

export class getSearchJokeAction implements Action {
  readonly type = JokeActionType.SET_SEARCH_JOKE_ACTION;
  constructor(public payload?: string) {}
}
export class getSearchJokeActionSucces implements Action {
  readonly type = JokeActionType.SET_SEARCH_JOKE_ACTION_SUCCES;
  constructor(public payload: string) {}
}
export class getSearchJokeActionError implements Action {
  readonly type = JokeActionType.SET_SEARCH_JOKE_ACTION_ERROR;
  constructor(public payload: string) {}
}

export type JokeActions =
  | getRandomJokeAction
  | getCategoriesListAction
  | getRandomJokeFromCategoryAction
  | getSearchJokeAction
  | getRandomJokeActionSuccess
  | getRandomJokeActionError
  | getCategoriesListActionSucces
  | getCategoriesListActionError
  | getRandomJokeFromCategoryActionSucces
  | getRandomJokeFromCategoryActionError
  | getSearchJokeActionSucces
  | getSearchJokeActionError;
