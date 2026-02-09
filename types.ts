
export interface HomeInventory {
  id: string;
  name: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  tag: string;
  inStock: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  role: string;
  avatar: string;
}
