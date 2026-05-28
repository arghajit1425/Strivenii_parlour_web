export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  tag: string;
  price?: string;
  duration?: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  altText: string;
  title: string;
  category: string;
}

export interface Appointment {
  id: string;
  name: string;
  phone: string;
  serviceId: string;
  serviceName: string;
  date: string;
  timeSlot?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}
