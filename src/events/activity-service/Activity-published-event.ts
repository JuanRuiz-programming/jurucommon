import { Subjects } from "../subjects";

export interface ActivityPublishedEvent {
  subject: Subjects.ActivityPublished;
  data: {
    id: string;
    owner: string;
    version: number;
  };
}
