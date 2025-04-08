
export interface Client {
  id: string;
  name: string;
  avatarUrl: string;
  verified: boolean;
  rating?: number;
  reviewCount?: number;
}

export interface JobBudget {
  min: number;
  max: number;
  type: "fixed" | "hourly";
}

export interface Job {
  id: string;
  title: string;
  description: string;
  budget: JobBudget;
  client: Client;
  skills: string[];
  duration: string;
  location?: string;
  applications: number;
  createdAt: string;
  category: string;
  experience: "entry" | "intermediate" | "expert" | "any";
}

export interface Freelancer {
  id: string;
  name: string;
  title: string;
  avatarUrl: string;
  verified: boolean;
  rating: number;
  reviewCount: number;
  hourlyRate: number;
  skills: string[];
  description: string;
  completedJobs: number;
}
