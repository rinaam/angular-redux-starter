import { Component } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { FormBuilder } from "@angular/forms";
import { getSearchJokeAction } from "../../reducers/joke.reducer";
import { Observable } from "rxjs";
import { AppState, selectSearchedJoke } from "src/app/reducers/root.reducer";

@Component({
  selector: "app-search-joke",
  templateUrl: "./search-joke.component.html",
  styleUrls: ["./search-joke.component.scss"]
})
export class SearchJokeComponent {
  searchedJokeList$: Observable<string[]>;
  searchJokeForm;

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder
  ) {
    this.searchJokeForm = this.formBuilder.group({
      searchJokeName: ""
    });

    this.searchedJokeList$ = this.store.pipe(select(selectSearchedJoke));
  }

  onSubmit(value: string) {
    this.store.dispatch(new getSearchJokeAction(value));
  }
}
