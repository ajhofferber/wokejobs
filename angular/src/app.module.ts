import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./components/app/app.component";
import { SearchComponent } from "./components/search/search.component";
import { JobsComponent } from "./components/jobs/jobs.component";

import { JobsService } from "./service/jobs.service";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    SearchComponent,
    JobsComponent
  ],
  providers: [
    JobsService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
