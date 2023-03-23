export interface ResumeHeader {
    name: {
      first: string;
      last: string;
    }
    email: string;
    phone: string;
    address?: {
      street: string;
      city: string;
      state: string;
      zip: string;
    }
    sites?: {
      github: string;
      linkedin: string;
      website: string;
    }
  }