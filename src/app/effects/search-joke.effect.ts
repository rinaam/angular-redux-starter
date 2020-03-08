import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";

import { SearchJokeService } from "../services/search-joke.service";

import {
  JokeActionType,
  getSearchJokeActionSucces,
  getSearchJokeActionError
} from "../reducers/joke.reducer";
import { switchMap, catchError, map } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class SearchJokeEffects {
  constructor(
    private actions$: Actions,
    private SearchJokeService: SearchJokeService
  ) {}

  @Effect()
  getSearchedJoke$ = this.actions$.pipe(
    ofType(JokeActionType.SET_SEARCH_JOKE_ACTION),
    switchMap((action: any) =>
      this.SearchJokeService.getSearchedJoke(action.payload).pipe(
        map((response: string) => new getSearchJokeActionSucces(response)),
        catchError((error: string) => of(new getSearchJokeActionError(error)))
      )
    )
  );
}
