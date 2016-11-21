import { Component, Input, Output} from "@angular/core";

@Component({
  selector: "search",
  template: require("./search.component.pug")
})

export class SearchComponent {
  @Input() searchJob: string;
  @Input() searchCity: string;

  constructor() {
  }

  search(): void {
    console.log("here's a thing to search for", this.searchJob);
    console.log("here's a place to search for", this.searchCity);
  }
}
