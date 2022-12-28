import { Subjects } from "../subjects";

export interface ProjectWinnersEvent {
  subject: Subjects.ProjectWinners;
  data: {
    id: string;
    version: number;
    author: string;
    type: string;
    scope: string;
    level: string;
    size: string;
    complexity: string;
    title: string;
    driven_question: string;
    short_desc: string;
    long_desc: string;
    learning_goals: string[];
    major_products: string[];
    public_products: string[];
    areas: string[];
    promo_media: string[];
    docs: string[];
    schedule: string;
    phases: string[];
    phase: string;
    teams: string[];
    courses: string[];
    tools: string[];
    status: string;
    followers?: string[];
    adds?: string[];
  };
}
