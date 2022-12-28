import { Subjects } from "../subjects";

export interface ProjectDeletedEvent {
  subject: Subjects.ProjectDeleted;
  data: {
    id: string;
    version: number;
    author: string;
    title: string;
  };
}
