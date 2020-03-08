import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable()
export class SearchJokeService {
  constructor(private http: HttpClient) {}

  constructSearchJokeUrl(query) {
    const url: string = `https://api.chucknorris.io/jokes/search?query=${query}`;
    return url;
  }

  getSearchedJoke(value: string) {
    return this.http
      .get(this.constructSearchJokeUrl(value))
      .pipe(catchError((error: any) => throwError(error.message)));
  }
}
