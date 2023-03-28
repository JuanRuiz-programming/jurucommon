import { Subjects } from "../subjects";

export interface ActivityUnpublishedEvent {
  subject: Subjects.ActivityUnpublished;
  data: {
    id: string;
    owner: string;
    version: number;
  };
}
