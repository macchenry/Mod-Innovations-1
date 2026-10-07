export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  featured?: boolean;
  isImageCard?: boolean;
  iconName: 'briefcase' | 'compass' | 'trending-up' | 'shield-check' | 'globe' | 'coins';
  deliverables: string[];
  typicalClient: string;
  caseStudy: {
    client: string;
    result: string;
    duration: string;
  };
}

export interface ConsultationRequest {
  serviceId: string;
  portfolioSize: string;
  timeframe: string;
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  notes: string;
}
