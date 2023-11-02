import { Subjects } from "../subjects";

export interface ProjectCreatedDemoEvent {
  subject: Subjects.ProjectdemoCreated;
  data: {
    id: string;
    version: number;
    owner: string;
    author: string[];
    type: string;
    scope: string;
    level: string;
    size: string;
    complexity: string;
    title: string;
    driven_question: string;
    desc: string;
    learning_goals: string[];
    major_products: string[];
    public_products: string[];
    schedule: string;
    phases: string[];
    phase: string;
    phase_tasks: string[];
    phase_task: string;
    areas: string[];
    docs: string[];
    tools: string[];
    status: string;
    promo_media: string[];
    followers?: string[];
    feeling?: string;
    winners?: string[];
    adds?: string[];
    events?: string[];
    courses: string[];
    complements: string[];
    resources?: string[];
    teams: string[];
  };
}