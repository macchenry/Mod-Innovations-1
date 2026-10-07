export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  featured?: boolean;
  deliverables?: string[];
  category?: 'Hardware & Repairs' | 'Printing & Production' | 'Design & Signage';
}

export interface InquiryRequest {
  serviceId: string;
  fullName: string;
  email: string;
  phone: string;
  serviceCategory?: string;
  details: string;
}
