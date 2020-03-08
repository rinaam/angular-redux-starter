import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";

import { JokeFromCategoryService } from "../services/joke-from-category.service";

import {
  JokeActionType,
  getRandomJokeFromCategoryActionSucces,
  getRandomJokeFromCategoryActionError
} from "../reducers/joke.reducer";
import { switchMap, catchError, map } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class JokeFromCategoryEffects {
  constructor(
    private actions$: Actions,
    private JokeFromCategoryService: JokeFromCategoryService
  ) {}

  @Effect()
  getJokeFromCategory$ = this.actions$.pipe(
    ofType(JokeActionType.GET_RANDOM_JOKE_FROM_CATEGORY_ACTION),
    switchMap((action: any) =>
      this.JokeFromCategoryService.getJokeFromCategory(action.payload).pipe(
        map(
          (response: string) =>
            new getRandomJokeFromCategoryActionSucces(response)
        ),
        catchError((error: string) =>
          of(new getRandomJokeFromCategoryActionError(error))
        )
      )
    )
  );
}
