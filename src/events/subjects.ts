export enum Subjects {
  // AUTH EVENTS
  UserCreated = "user:created",
  UserUpdated = "user:updated",
  UserDeleted = "user:deleted",
  UserBlocked = "user:blocked",
  UserPenalized = "user:penalized",

  // PROFILE EVENTS
  ProfileCreated = "profile:created",
  ProfileDemoCreated = "profiledemo:created",
  ProfileUpdated = "profile:updated",
  ProfilePublished = "profile:published",
  ProfileUnpublished = "profile:unpublished",

  // PROJECT EVENTS
  ProjectCreated = "project:created",
  ProjectDemoCreated = "projectdemo:created",
  ProjectUpdated = "project:updated",
  ProjectDeleted = "project:deleted",
  ProjectCancelled = "project:cancelled",
  ProjectPublished = "project:published",
  ProjectUnpublished = "project:unpublished",
  projectFinished = "project:finished",
  projectCloned = "project:cloned",
  ProjectPromoted = "project:promoted",
  ProjectWinners = "project:winners",

  // COURSE EVENTS
  CourseCreated = "course:created",
  CourseDemoCreated = "coursedemo:created",
  CourseUpdated = "course:updated",
  CourseDeleted = "course:deleted",
  CoursePublished = "course:published",
  CourseUnpublished = "course:unpublished",
  CourseFinished = "course:finished",
  CoursePromoted = "course:promoted",

  // ACTIVITY EVENTS
  ActivityCreated = "activity:created",
  ActivityDemoCreated = "activitydemo:created",
  ActivityUpdated = "activity:updated",
  ActivityDeleted = "activity:deleted",
  ActivityPublished = "activity:published",
  ActivityUnpublished = "activity:unpublished",
  ActivityFinished = "activity:finished",

  // A11Y EVENTS
  A11yConfigCreated = "a11yconfig:created",
  A11yConfigUpdated = "a11yconfig:updated",

  // ESTABLISHMENT EVENTS

  // ADDS EVENTS

  // RELEASES EVENTS

  // REVIEWS EVENTS

  // BABYSTEPS EVENTS

  // STUDENTS  GROUP EVENTS
}
