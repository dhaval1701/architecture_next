export interface ProjectImage {
  id: string;
  url: string;
  alt: string;
  type: "hero" | "gallery" | "featured";
}

export interface Project {
  id: number;
  title: string;
  slug: string; // URL-friendly version for routing
  description: string;
  longDescription?: string;
  imageUrl: string; // Main thumbnail for list view
  images: ProjectImage[]; // All project images
  category: string;
  location: string;
  plotArea: string;
  builtUpArea: string;
  client: string;
  year: string;
  status?: "completed" | "ongoing" | "upcoming";
  technologies?: string[];
  features?: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "The Vertic House",
    slug: "the-vertic-house",
    description:
      "The Sarpanch House in Limbodara village, Gandhinagar, is a modern luxury residential that combines contemporary architecture with cultural identity.",
    longDescription:
      "Featuring a built façade with red oval fire and stark concrete forms, the design offers a strong architectural presence and clear character. The landscaped entrance enhances the home's appeal, offering a sustainable and welcoming design. More than a private home, it stands as a landmark of leadership, transparency, and progressive village development in Gandhinagar.",
    imageUrl: "/assets/sarpanch_house_300.svg",
    images: [
      {
        id: "vertic-hero-1",
        url: "/assets/sarpanch_house_300.svg",
        alt: "The Vertic House exterior view",
        type: "hero",
      },
      {
        id: "vertic-gallery-1",
        url: "/assets/sarpanch_house_300.svg",
        alt: "The Vertic House side angle",
        type: "gallery",
      },
      {
        id: "vertic-gallery-2",
        url: "/assets/sarpanch_house_300.svg",
        alt: "The Vertic House interior living space",
        type: "gallery",
      },
      {
        id: "vertic-gallery-3",
        url: "/assets/sarpanch_house_300.svg",
        alt: "The Vertic House courtyard",
        type: "gallery",
      },
      {
        id: "vertic-gallery-4",
        url: "/assets/sarpanch_house_300.svg",
        alt: "The Vertic House night illumination",
        type: "gallery",
      },
    ],
    category: "Residential",
    location: "Gandhinagar, Gujarat",
    plotArea: "21,975 sq ft",
    builtUpArea: "5000 sq ft",
    client: "Harendra Patel",
    year: "2025 - 2027",
    status: "ongoing",
    features: [
      "Contemporary Architecture",
      "Cultural Integration",
      "Sustainable Design",
      "Landscaped Gardens",
      "Modern Amenities",
    ],
  },
  {
    id: 2,
    title: "SK Farm",
    slug: "sk-farm",
    description:
      "Luxury farmhouse design blending traditional and modern aesthetics with sustainable farming practices.",
    longDescription:
      "SK Farm represents the perfect harmony between modern luxury and traditional farming values. The design incorporates sustainable materials and energy-efficient systems while maintaining the rustic charm of countryside living.",
    imageUrl: "/assets/sk_farm.svg",
    images: [
      {
        id: "sk-hero-1",
        url: "/assets/projects/sk-farm/hero-1.jpg",
        alt: "SK Farm main building",
        type: "hero",
      },
      {
        id: "sk-gallery-1",
        url: "/assets/projects/sk-farm/farmhouse.jpg",
        alt: "SK Farm traditional elements",
        type: "gallery",
      },
      {
        id: "sk-gallery-2",
        url: "/assets/projects/sk-farm/landscape.jpg",
        alt: "SK Farm landscaping",
        type: "gallery",
      },
    ],
    category: "Farm House",
    location: "Ahmedabad, Gujarat",
    plotArea: "2 Acres",
    builtUpArea: "8000 sq ft",
    client: "SK Group",
    year: "2024 - 2026",
    status: "ongoing",
    features: [
      "Sustainable Design",
      "Traditional Architecture",
      "Organic Farming Integration",
      "Eco-friendly Materials",
    ],
  },
  {
    id: 3,
    title: "The Patel Mansion",
    slug: "the-patel-mansion",
    description:
      "Elegant mansion with sophisticated design and premium finishes showcasing luxury living.",
    longDescription:
      "The Patel Mansion stands as a testament to luxury and sophistication. Every detail has been carefully crafted to create a harmonious blend of contemporary design and timeless elegance.",
    imageUrl: "/assets/patel_mansion.svg",
    images: [
      {
        id: "patel-hero-1",
        url: "/assets/projects/patel-mansion/hero-1.jpg",
        alt: "The Patel Mansion facade",
        type: "hero",
      },
      {
        id: "patel-gallery-1",
        url: "/assets/projects/patel-mansion/interior.jpg",
        alt: "The Patel Mansion luxury interior",
        type: "gallery",
      },
    ],
    category: "Mansion",
    location: "Surat, Gujarat",
    plotArea: "15,000 sq ft",
    builtUpArea: "12000 sq ft",
    client: "Patel Family",
    year: "2023 - 2025",
    status: "completed",
    features: [
      "Luxury Finishes",
      "Smart Home Technology",
      "Premium Materials",
      "Sophisticated Design",
    ],
  },
  {
    id: 4,
    title: "Saran Group",
    slug: "saran-group",
    description:
      "Commercial project with innovative design and functional spaces for modern business needs.",
    longDescription:
      "The Saran Group commercial complex represents modern business architecture at its finest, combining functionality with aesthetic appeal to create an inspiring work environment.",
    imageUrl: "/assets/saran_group.svg",
    images: [
      {
        id: "saran-hero-1",
        url: "/assets/projects/saran-group/hero-1.jpg",
        alt: "Saran Group commercial building",
        type: "hero",
      },
    ],
    category: "Commercial",
    location: "Mumbai, Maharashtra",
    plotArea: "50,000 sq ft",
    builtUpArea: "25000 sq ft",
    client: "Saran Group",
    year: "2024 - 2026",
    status: "ongoing",
    features: [
      "Modern Office Spaces",
      "Flexible Layouts",
      "Sustainable Systems",
      "Premium Amenities",
    ],
  },
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projectsData.find((project) => project.slug === slug);
};

// Helper function to get all project slugs
export const getAllProjectSlugs = (): string[] => {
  return projectsData.map((project) => project.slug);
};
