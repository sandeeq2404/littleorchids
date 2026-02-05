export interface GalleryEvent {
  id: number;
  title: string;
  coverImage: string;
  images: string[];
  description: string;
}

export const galleryData: GalleryEvent[] = [
  {
    id: 1,
    title: "Annual Day Celebration 2026",
    coverImage: "/src/assets/gallery/annual1.jpg",
    images: [
      "/src/assets/gallery/annual1.jpg",
      "/src/assets/gallery/annual2.jpg",
      "/src/assets/gallery/annual3.jpg",
    ],
    description: "Annual Day Celebration 2026",
  },
];
