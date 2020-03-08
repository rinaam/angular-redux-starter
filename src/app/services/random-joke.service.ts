import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable()
export class RandomJokeService {
  private randomJokeUrl: string = "https://api.chucknorris.io/jokes/random";

  constructor(private http: HttpClient) {}

  getRandomJoke() {
    return this.http
      .get(this.randomJokeUrl)
      .pipe(catchError((error: any) => throwError(error.message)));
  }
}
