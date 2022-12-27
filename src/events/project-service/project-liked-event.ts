import { Subjects } from "../subjects";

export interface ProjectLikedEvent {
  subject: Subjects.ProjectLiked;
  data: {
    id: string;
    version: number;
    owner: string;
    projectType: string;
    coverPhoto: string;
    guidelines: string;
    code: string;
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
