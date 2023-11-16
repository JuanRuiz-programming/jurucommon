import { Subjects } from "../subjects";

export interface CourseUpdatedDemoEvent {
  subject: Subjects.CourseDemoUpdated;
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
    desc: string;
    main_topic: string;
    secundary_topic: string[];
    learning_goals: string[];
    sections: string[];
    lessons: string[];
    schedule: string;
    area: string;
    docs: string[];
    tools: string[];
    promo_media: string[];
    status: string;
    students: string[];
    activities: string[];
    assessments: string[];
    teams: string[];
    projects_related: string[];
    courses_related: string[];
    tutoring: string[];
  }
}