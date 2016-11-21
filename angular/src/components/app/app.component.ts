import { Component, Input } from "@angular/core";

@Component({
  selector: "app",
  template: require("./app.component.pug")
})

export class AppComponent {

  private working: string;

  @Input() jobList: any;

  constructor() {
    this.working = "duh";
  }

  loadJobs(jobs: any) {
    this.jobList = jobs;
  }
}
