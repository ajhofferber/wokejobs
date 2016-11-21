import { Injectable } from "@angular/core";

@Injectable()

export class JobsService {
  getJobs(): any[] {
    let jobArray: any = [];
    for (let i = 0; i < 10; i++) {
      jobArray.push(this.jobMaker());
    }
    return jobArray;
  }

  jobMaker(): any {
    return {
      title: "professional job-haver",
      description: "gotta have a job. a big old job.",
      location: "america"
    };
  }


}
