import { Component } from "@angular/core";
import { Store, select } from "@ngrx/store";
import {
  getCategoriesListAction,
  getRandomJokeFromCategoryAction
} from "../../reducers/joke.reducer";
import { Observable } from "rxjs";
import {
  AppState,
  setCategoryList,
  selectJokeFromCategory
} from "src/app/reducers/root.reducer";

@Component({
  selector: "app-categories-list",
  templateUrl: "./categories-list.component.html",
  styleUrls: ["./categories-list.component.scss"]
})
export class CategoriesListComponent {
  categories$: Observable<string[]>;
  jokeFromCategory$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new getCategoriesListAction());
    this.categories$ = this.store.pipe(select(setCategoryList));
    this.jokeFromCategory$ = this.store.pipe(select(selectJokeFromCategory));
  }

  getJokeFromCategory(category: string) {
    this.store.dispatch(new getRandomJokeFromCategoryAction(category));
  }
}
