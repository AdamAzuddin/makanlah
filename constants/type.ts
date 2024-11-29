// /constants/types.ts

export interface Restaurant {
    name: string;
    description: string;
    image: string;  // Path to the image of the restaurant
  }
  
  export interface Place {
    name: string;
    latitude: number;
    longitude: number;
    restaurants: Restaurant[];  // List of restaurants for this place
  }
  