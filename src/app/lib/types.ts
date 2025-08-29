export interface User {
  _id: string;
  email: string;
  role: "admin" | "user";
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage?: string;
  author: string;
  status: "draft" | "published" | "archived";
  tags: string[];
  category: string;
  readTime?: number;
  views: number;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface NewsletterSubscriber {
  _id: string;
  email: string;
  status: "active" | "unsubscribed";
  subscribedAt: Date;
}

export interface NewsletterCampaign {
  _id: string;
  subject: string;
  content: string;
  htmlContent?: string;
  recipients: string[];
  status: "draft" | "sent" | "scheduled";
  sentAt?: Date;
  scheduledAt?: Date;
  openRate: number;
  clickRate: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface WaitlistEntry {
  _id: string;
  email: string;
  name: string;
  phone?: string;
  company?: string;
  interest: "trading" | "investment" | "education" | "consulting" | "other";
  message?: string;
  status: "pending" | "contacted" | "converted" | "rejected";
  priority: "low" | "medium" | "high";
  contactedAt?: Date;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface DashboardStats {
  totalBlogs: number;
  publishedBlogs: number;
  draftBlogs: number;
  totalSubscribers: number;
  activeSubscribers: number;
  totalWaitlist: number;
  pendingWaitlist: number;
  totalMails: number;
  sentMails: number;
  recentActivity: Array<{
    type: string;
    message: string;
    timestamp: Date;
  }>;
}
