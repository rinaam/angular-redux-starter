import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable()
export class CategoryListService {
  private categoryListUrl: string =
    "https://api.chucknorris.io/jokes/categories";

  constructor(private http: HttpClient) {}

  getCategoryList() {
    return this.http
      .get(this.categoryListUrl)
      .pipe(catchError((error: any) => throwError(error.message)));
  }
}
