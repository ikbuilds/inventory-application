import { prisma } from "./prisma.js";

async function main() {
  const categories = [
    {
      name: "Electronics",
      description:
        "Devices and gadgets including phones, laptops, and accessories.",
      products: [
        {
          name: "iPhone 15",
          sku: "ELEC-001",
          price: 1200,
          description:
            "Latest Apple smartphone with A16 chip and advanced camera system.",
        },
        {
          name: "MacBook Air M2",
          sku: "ELEC-002",
          price: 1500,
          description:
            "Lightweight Apple laptop powered by the M2 chip for performance and efficiency.",
        },
        {
          name: "Samsung Buds",
          sku: "ELEC-003",
          price: 180,
          description:
            "Wireless earbuds with noise cancellation and high-quality sound.",
        },
      ],
    },
    {
      name: "Groceries",
      description: "Food items and household consumables.",
      products: [
        {
          name: "Basmati Rice 5kg",
          sku: "GROC-001",
          price: 25,
          description:
            "Premium long-grain basmati rice suitable for daily meals.",
        },
        {
          name: "Cooking Oil 1L",
          sku: "GROC-002",
          price: 8,
          description: "Refined vegetable oil for frying and cooking.",
        },
        {
          name: "Milk Powder 500g",
          sku: "GROC-003",
          price: 12,
          description: "Instant full-cream milk powder rich in nutrients.",
        },
      ],
    },
    {
      name: "Clothing",
      description: "Apparel for men, women, and children.",
      products: [
        {
          name: "Plain White T-Shirt",
          sku: "CLOT-001",
          price: 15,
          description: "100% cotton basic white t-shirt for casual wear.",
        },
        {
          name: "Denim Jeans",
          sku: "CLOT-002",
          price: 40,
          description:
            "Durable slim-fit denim jeans suitable for everyday use.",
        },
        {
          name: "Hooded Jacket",
          sku: "CLOT-003",
          price: 60,
          description:
            "Warm hoodie jacket designed for comfort and cold weather.",
        },
      ],
    },
    {
      name: "Furniture",
      description: "Home and office furniture items.",
      products: [
        {
          name: "Office Chair",
          sku: "FURN-001",
          price: 120,
          description:
            "Ergonomic office chair with lumbar support and adjustable height.",
        },
        {
          name: "Wooden Desk",
          sku: "FURN-002",
          price: 250,
          description: "Sturdy wooden desk suitable for office or study use.",
        },
        {
          name: "Bookshelf",
          sku: "FURN-003",
          price: 180,
          description: "Multi-layer bookshelf for organizing books and decor.",
        },
      ],
    },
    {
      name: "Stationery",
      description: "School and office supplies.",
      products: [
        {
          name: "A4 Notebook",
          sku: "STAT-001",
          price: 3,
          description: "Lined A4 notebook for writing and note-taking.",
        },
        {
          name: "Ballpoint Pen Pack",
          sku: "STAT-002",
          price: 5,
          description: "Pack of smooth-writing ballpoint pens for daily use.",
        },
        {
          name: "Stapler Set",
          sku: "STAT-003",
          price: 10,
          description:
            "Heavy-duty stapler with staples included for office tasks.",
        },
      ],
    },
  ];

  await Promise.all(
    categories.map((category) =>
      prisma.category.create({
        data: {
          name: category.name,
          description: category.description,
          products: {
            create: category.products,
          },
        },
      }),
    ),
  );

  console.log("Seed completed successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
