import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable()
export class JokeFromCategoryService {
  constructor(private http: HttpClient) {}

  constructJokeUrl(category: string) {
    const url: string = `https://api.chucknorris.io/jokes/random?category=${category}`;
    return url;
  }

  getJokeFromCategory(category: string) {
    return this.http
      .get(this.constructJokeUrl(category))
      .pipe(catchError((error: any) => throwError(error.message)));
  }
}
