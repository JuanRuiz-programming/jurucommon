import { Subjects } from "../subjects";

export interface ProjectDeletedEvent {
  subject: Subjects.ProjectDeleted;
  data: {
    id: string;
    version: string;
    author: string;
    title: string;
  };
}
