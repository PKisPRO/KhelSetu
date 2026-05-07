export type Condition = 'New' | 'Like New' | 'Good' | 'Fair';
export type Availability = 'Available' | 'Reserved' | 'Donated';

export interface Equipment {
  id: string;
  name: string;
  sport: string;
  condition: Condition;
  location: string;
  availability: Availability;
  image: string;
  description: string;
  donorName: string;
  donatedAt: string;
  approved: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string | null;
  socials?: {
    instagram?: string;
    linkedin?: string;
    email?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  location: string;
  avatar: string | null;
}

export interface DonationFormData {
  name: string;
  email: string;
  phone: string;
  equipmentType: string;
  sport: string;
  condition: Condition | '';
  location: string;
  method: 'school' | 'porter' | '';
  notes: string;
}
