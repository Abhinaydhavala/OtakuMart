const About = {
  header: {
    title: "About Us",
    subtitle:
      "Welcome to OtakuMart - Your one-stop shop for all anime merchandise!",
  },
  story: {
    title: "Our Story",
    description:
      "Founded in 2024, OtakuMart was created by anime enthusiasts for anime enthusiasts. We aim to bring the best quality anime-themed products to fans around the globe. From apparel to accessories, our mission is to deliver merchandise that reflects your love for anime.",
  },
  mission: {
    title: "Our Mission",
    description:
      "At OtakuMart, we believe every fan deserves to celebrate their favorite shows with pride. Our mission is to provide unique, high-quality products that bring the spirit of anime to life.",
  },
  team: {
    title: "Meet Our Team",
    members: [
      {
        name: "Abhinay Dhavala",
        role: "Founder & CEO",
        image: "./assets/team-member1.jpg",
      },
      {
        name: "Rohith Sagar",
        role: "Head of Marketing",
        image: "./assets/team-member2.jpg",
      },
      {
        name: "Vijith Suryanarayana",
        role: "Creative Director",
        image: "./assets/team-member3.jpg",
      },
    ],
  },
};

// New filter content
const Filter = {
  heading: "Filter",
  popularAnime: {
    title: "Popular Anime",
    options: [
      "One Piece",
      "Solo Leveling",
      "HunterXHunter",
      "Naruto",
      "SpyXFamily",
      "Demon Slayer",
    ],
  },
  priceRange: {
    title: "Price Range",
    min: 0,
    max: 100,
  },
  products: {
    title: "Products",
    options: [
      "T-Shirts",
      "Joggers",
      "Hoodies",
      "Sweatshirts",
      "Shorts",
      "Fullhand Sleeves T-Shirts",
    ],
  },
  size: {
    title: "Size",
    options: ["S", "M", "L", "XL", "XXL"],
  },
};

const OtakuMartContent = {
  heroCarousel: [
    {
      image: "./assets/HeroBanner.jpg",
      title: "Welcome to OtakuMart",
      description: "Your one-stop shop for anime merchandise!",
    },
    {
      image: "./assets/SpyXFamily.jpg",
      title: "Spy X Family Collection",
      description: "Exclusive products for Spy X Family fans!",
    },
    {
      image: "./assets/LuffyCarousel.jpg",
      title: "OnePiece Arrivals",
      description: "Discover the latest Luffy Gear 5 collection.",
    },
  ],
  products: {
    heading: "Our Products",
    items: Array(6).fill({
      image: "./assets/tshirt.jpg",
      title: "Product Title",
      description: "Some description of the product.",
    }),
  },
  bestSellers: {
    heading: "Best Sellers",
    items: [
      {
        image: "./assets/SpyXFamily.jpg",
        title: "Spy X Family",
      },
      {
        image: "./assets/BlueLock.jpeg",
        title: "Blue Lock",
      },
    ],
  },
  footer: {
    text: "© 2024 OtakuMart. All rights reserved.",
  },
};

export { About, Filter, OtakuMartContent };
