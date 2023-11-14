import { Subjects } from "../subjects";

export interface ActivityDemoCreatedEvent {
  subject: Subjects.ActivityDemoCreated;
  data: {
    id: string;
    owner: string;
    version: number;
    author: string;
    type: string;
    typology: string;
    scope: string;
    level: string;
    complexity: string;
    area: string;
    title: string;
    prompt: string;
    content: string;
    media: string[];
    docs: string[];
    tools: string[];
    status: string;
    feedback: string;
    gradable: boolean;
    courses_related: string[]
    timer: string;
  };
}
