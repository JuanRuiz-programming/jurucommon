import { Subjects } from "../subjects";

export interface A11yConfigCreatedEvent {
  subject: Subjects.A11yConfigCreated;
  data: {
    id: string;
    owner: string;
    profile: string;
    theme: string;
    layout: string;
    typography: string;
    highlightTitles: boolean;
    highlightLinks: boolean;
    language: string;
    images: boolean;
    videos: boolean;
    audios: boolean;
    readingGuideLine: boolean;
    bigCursor: boolean;
    bigBlackCursor: boolean;
    version: number;
  };
}
