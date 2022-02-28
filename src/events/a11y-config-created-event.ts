import { Subjects } from "./subjects";

export interface A11yConfigCreatedEvent {
  subjects: Subjects.A11yConfigCreated;
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
    images: string;
    videos: string;
    audios: string;
    readingGuideLine: boolean;
    bigCursor: boolean;
    bigBlackCursor: boolean;
    version: number;
  };
}
