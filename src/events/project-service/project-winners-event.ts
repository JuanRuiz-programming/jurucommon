import { Subjects } from "../subjects";

export interface ProjectWinnersEvent {
  subject: Subjects.ProjectWinners;
  data: {
    id: string;
    version: number;
    owner: string;
  };
}