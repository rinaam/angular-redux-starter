import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RandomJokeComponent } from "./pages/random-joke/random-joke.component";
import { CategoriesListComponent } from "./pages/categories-list/categories-list.component";
import { SearchJokeComponent } from "./pages/search-joke/search-joke.component";

const routes: Routes = [
  {
    path: "random",
    component: RandomJokeComponent
  },
  {
    path: "categories",
    component: CategoriesListComponent
  },
  {
    path: "search",
    component: SearchJokeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
