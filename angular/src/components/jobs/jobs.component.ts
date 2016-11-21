import { Component, Input } from "@angular/core";

import { JobsService } from "./../../service/jobs.service";

@Component({
  selector: "jobs",
  template: require("./jobs.component.pug")
})

export class JobsComponent {

  @Input() jobList: any[];

  private jobs: any[];

  constructor(jobsService: JobsService) {
    this.jobs = jobsService.getJobs();
  }

}
