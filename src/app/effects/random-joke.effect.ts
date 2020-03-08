import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";

import { RandomJokeService } from "../services/random-joke.service";

import {
  JokeActionType,
  getRandomJokeActionSuccess,
  getRandomJokeActionError
} from "../reducers/joke.reducer";
import { switchMap, catchError, map } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class RandomJokeEffects {
  constructor(
    private actions$: Actions,
    private RandomJokeService: RandomJokeService
  ) {}

  @Effect()
  getRandomJokes$ = this.actions$.pipe(
    ofType(JokeActionType.GET_RANDOM_JOKE_ACTION),
    switchMap(() =>
      this.RandomJokeService.getRandomJoke().pipe(
        map((response: string) => new getRandomJokeActionSuccess(response)),
        catchError((error: string) => of(new getRandomJokeActionError(error)))
      )
    )
  );
}
