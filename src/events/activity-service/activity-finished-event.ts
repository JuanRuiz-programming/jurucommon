import { Subjects } from "../subjects";

export interface ActivityFinishedEvent {
  subject: Subjects.ActivityFinished;
  data: {
    id: string;
    owner: string;
    version: number;
  };
}
