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
  description: string[];
  longDescription?: string;
  heroImage: string; // Main thumbnail for list view
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
    description: [
      "The Sarpanch House in Limbodara village, Gandhinagar, is a modern luxury residential that combines contemporary architecture with cultural identity.",
      "Constructed with a built facade, the design offers a strong architectural presence and clear character.",
      "Featuring a built facade with red oval fire and stark concrete forms, the design offers a strong architectural presence and clear character.",
    ],
    heroImage: "/projects/vertic_house/image_1.svg",
    images: [
      {
        id: "vertic-hero-1",
        url: "/projects/vertic_house/image_2.svg",
        alt: "The Vertic House exterior view",
        type: "hero",
      },
      {
        id: "vertic-gallery-1",
        url: "/projects/vertic_house/image_3.svg",
        alt: "The Vertic House side angle",
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
  },
  {
    id: 2,
    title: "S. R. FARM",
    slug: "s-r-farm",
    description: [
      "S.R. Farm House in Ranuj, Patan is designed as a statement of timeless luxury, combining classical European architecture with modern elegance.",
      "The grand symmetrical facade, tall columns, elegant balconies, and detailed cornices reflect sophistication and strength, while expansive glass openings connect the interiors to nature. A majestic lion fountain in bronze forms the heart of the outdoor landscape, complemented by water features, well-maintained lush lined pathways, and ambient lighting enhance the serene yet royal environment.",
      "More than just a residence, this farmhouse represents heritage exclusivity, and lifestyle, setting a new benchmark for luxury farmhouse design in Gujarat.",
    ],
    heroImage: "/projects/sr_farm/image_1.svg",
    images: [
      {
        id: "sr-hero-1",
        url: "/projects/sr_farm/image_1.svg",
        alt: "S.R. Farm main facade",
        type: "hero",
      },
      {
        id: "sr-gallery-1",
        url: "/projects/sr_farm/image_2.svg",
        alt: "S.R. Farm side view with landscaping",
        type: "gallery",
      },
    ],
    category: "Farm House",
    location: "Ranuj, Patan",
    plotArea: "30,317 sq ft",
    builtUpArea: "3500 sq ft",
    client: "Tejani Patel",
    year: "2025 - 2027",
    status: "ongoing",
  },
  {
    id: 3,
    title: "THE PATEL MANSION",
    slug: "the-patel-mansion",
    description: [
      "This businessman's residence in Gandhinagar blends modern architecture with timeless materials, combining exposed brick, stone cladding, and sleek concrete forms.",
      "A cantilevered roof with a sculptural column defines the bold facade, while large openings connect the interiors to greenery. Palm-lined landscaping and integrated terraces soften the strong geometry, balancing elegance with comfort.",
      "Designed for luxury and practicality, this house reflects success, lifestyle, and prestige, setting a benchmark for modern residential architecture in Gujarat.",
    ],
    heroImage: "/projects/patel_mansion/image_1.svg",
    images: [
      {
        id: "patel-hero-1",
        url: "/projects/patel_mansion/image_1.svg",
        alt: "The Patel Mansion facade",
        type: "hero",
      },
      {
        id: "patel-gallery-1",
        url: "/projects/patel_mansion/image_2.svg",
        alt: "The Patel Mansion side view",
        type: "gallery",
      },
    ],
    category: "Mansion",
    location: "Gandhinagar, Gujarat",
    plotArea: "3314 sq ft",
    builtUpArea: "5500 sq ft",
    client: "Nilesh Patel",
    year: "2024 - 2025",
    status: "completed",
  },
  {
    id: 4,
    title: "SARAN GROUP",
    slug: "saran-group",
    description: [
      "Welcome to the Saran Group Office in Gandhinagar, a modern workspace that blends creativity, innovation, and elegance.",
      "The highlight of this office is its iconic curve design wall, crafted to give the space a bold yet sophisticated character. Surrounded by lush greenery and premium landscaping, the office sets new standards in architectural design, sustainable practices and luxury commercial spaces.",
      "Our design studio focuses on contemporary architecture and high-end design solutions that inspire productivity while showcasing timeless aesthetics.",
    ],
    heroImage: "/projects/saran_group/image_1.svg",
    images: [
      {
        id: "saran-hero-1",
        url: "/projects/saran_group/image_1.svg",
        alt: "Saran Group office exterior",
        type: "hero",
      },
      {
        id: "saran-gallery-1",
        url: "/projects/saran_group/image_2.svg",
        alt: "Saran Group curved design wall",
        type: "gallery",
      },
    ],
    category: "Commercial",
    location: "Gandhinagar, Gujarat",
    plotArea: "3500 sq ft",
    builtUpArea: "3100 sq ft",
    client: "Surbhi Thakor",
    year: "2024 - 2025",
    status: "completed",
  },
  {
    id: 5,
    title: "THE GAGANGRIHA VILLA",
    slug: "the-gagangriha-villa",
    description: [
      "The Gagangriha Villa in Gandhinagar is a masterpiece of luxury residential architecture, blending modern design with timeless classical elegance.",
      "Featuring grand facade details, the highlighted colonial heritage aesthetics, and expansive glass balconies, the villa creates an atmosphere of refined sophistication. Landscaped gardens, premium outdoor lounges, and a stunning entrance chandelier complete the luxurious experience.",
      "Every element has been thoughtfully designed to deliver comfort, prestige, and exclusivity making Gagangriha villa a true landmark in luxury home design in Gujarat.",
    ],
    heroImage: "/projects/gagangriha_villa/image_1.svg",
    images: [
      {
        id: "gagangriha-hero-1",
        url: "/projects/gagangriha_villa/image_1.svg",
        alt: "The Gagangriha Villa main facade",
        type: "hero",
      },
      {
        id: "gagangriha-gallery-1",
        url: "/projects/gagangriha_villa/image_2.svg",
        alt: "The Gagangriha Villa landscaped gardens",
        type: "gallery",
      },
    ],
    category: "Villa",
    location: "Gandhinagar, Gujarat",
    plotArea: "18,928 sq ft",
    builtUpArea: "5100 sq ft",
    client: "Manish Patel",
    year: "2023 - 2025",
    status: "completed",
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
