export interface ResumeExperience {
    title: string;
    company: string;
    companyImage?: string;
    locationType?: string; // TODO: change to enum
    isCurrentEmployment: boolean; //TODO: default to false
    startDate: Date;
    industry?: string;
    description: string;
    location?: string;
    employmentType?: string; // TODO: change to enum
    endDate?: Date;
  }