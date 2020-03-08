import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { getRandomJokeAction } from "../../reducers/joke.reducer";
import { Observable } from "rxjs";
import { AppState, selectJoke } from "src/app/reducers/root.reducer";

@Component({
  selector: "app-random-joke",
  templateUrl: "./random-joke.component.html",
  styleUrls: ["./random-joke.component.scss"]
})
export class RandomJokeComponent implements OnInit {
  joke$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new getRandomJokeAction());
  }

  ngOnInit(): void {
    this.joke$ = this.store.pipe(select(selectJoke));
  }
}
