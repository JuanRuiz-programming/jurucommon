import { Subjects } from "../subjects";

export interface ProjectCreatedDemoEvent {
  subject: Subjects.ProjectdemoCreated;
  data: {
    id: string;
    version: number;
    author: string[];
    owner: string;
  };
}