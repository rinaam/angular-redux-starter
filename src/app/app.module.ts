import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { RandomJokeComponent } from "./pages/random-joke/random-joke.component";
import { CategoriesListComponent } from "./pages/categories-list/categories-list.component";
import { SearchJokeComponent } from "./pages/search-joke/search-joke.component";
import rootReducers from "./reducers/root.reducer";
import { RandomJokeEffects } from "./effects/random-joke.effect";
import { CategoryListEffects } from "./effects/category-list.effect";
import { JokeFromCategoryEffects } from "./effects/joke-from-category.effect";
import { SearchJokeEffects } from "./effects/search-joke.effect";
import { CategoryListService } from "./services/category-list.service";
import { RandomJokeService } from "./services/random-joke.service";
import { JokeFromCategoryService } from "./services/joke-from-category.service";
import { SearchJokeService } from "./services/search-joke.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RandomJokeComponent,
    CategoriesListComponent,
    SearchJokeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      ...rootReducers
    }),
    EffectsModule.forRoot([
      RandomJokeEffects,
      CategoryListEffects,
      JokeFromCategoryEffects,
      SearchJokeEffects
    ]),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    RandomJokeService,
    CategoryListService,
    JokeFromCategoryService,
    SearchJokeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
