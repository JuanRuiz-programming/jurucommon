import { Subjects } from "../subjects";

export interface ProjectFinishedEvent {
  subject: Subjects.projectFinished;
  data: {
    id: string;
    version: number;
    owner: string;
  };
}
