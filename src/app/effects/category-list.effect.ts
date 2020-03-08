import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";

import { CategoryListService } from "../services/category-list.service";

import {
  JokeActionType,
  getCategoriesListActionSucces,
  getCategoriesListActionError
} from "../reducers/joke.reducer";
import { switchMap, catchError, map } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class CategoryListEffects {
  constructor(
    private actions$: Actions,
    private CategoryListService: CategoryListService
  ) {}

  @Effect()
  getCategoryList$ = this.actions$.pipe(
    ofType(JokeActionType.GET_CATEGORIES_LIST_ACTION),
    switchMap(() =>
      this.CategoryListService.getCategoryList().pipe(
        map((response: string) => new getCategoriesListActionSucces(response)),
        catchError((error: string) =>
          of(new getCategoriesListActionError(error))
        )
      )
    )
  );
}
