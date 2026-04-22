export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Textiles' | 'Pottery' | 'Jewelry' | 'Beauty' | 'Decor';
  images: string[];
  vendorId: string;
  highlights: string[];
  stock: number;
}

export interface Vendor {
  id: string;
  name: string;
  location: string;
  story: string; // Summary
  biography: string; // Full story
  image: string;
  specialty: string;
  workspaceImages: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
}
