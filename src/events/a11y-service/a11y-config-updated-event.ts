import { Subjects } from "../subjects";

export interface A11yConfigUpdatedEvent {
  subject: Subjects.A11yConfigUpdated;
  data: {
    id: string;
    owner: string;
    profile: string;
    theme: string;
    layout: string;
    typography: string;
    highlightTitles: boolean;
    highlightLinks: boolean;
    letterSpacing: string;
    lineHeight: string;
    language: string;
    images: boolean;
    videos: boolean;
    audios: boolean;
    readingGuideLine: boolean;
    readingGuideBox: boolean;
    bigCursor: boolean;
    bigBlackCursor: boolean;
    version: number;
  };
}
