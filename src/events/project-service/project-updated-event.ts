import { Subjects } from "../subjects";

export interface ProjectUpdatedEvent {
  subject: Subjects.ProjectUpdated;
  data: {
    id: string;
    version: number;
    owner: string;
    coverPhoto: string;
    guidelines: string;
    code: string;
    projectType: string;
    name: string;
    slug: string;
    establishment: string;
    area: string[];
    desc: string;
    topics: string[];
    goals: string[];
    status: string;
    followers: string[];
    releases: string[];
    adds: string[];
    courses: string[];
  };
}
