import { prisma } from "./prisma-client";

async function up() {
  await prisma.product.createMany({
    data: [
      {
        name: "Man Sneakers Nike Blazer Mid Suede",
        imageUrl: "https://drive.google.com/uc?export=view&id=1M2Ov54i7TWcUYZ4KoVQL12FNfeUs5f17",
        price: 129
      },
      {
        name: "Man Sneakers Nike Air Max 270",
        imageUrl: "https://drive.google.com/uc?export=view&id=1Nw09R3EpnlQbCRrE2hrK_nJMp5ohLbYn",
        price: 129
      },
      {
        name: "Sneakers Nike Blazer Mid Suede",
        imageUrl: "https://drive.google.com/uc?export=view&id=1SdIH2pvWATrEE5dIYL1QGr6iqey1mp_E",
        price: 84
      },
      {
        name: "Sneakers Puma X Aka Boku Future Rider",
        imageUrl: "https://drive.google.com/uc?export=view&id=131y1ll85vK7rcbs7rF-4qaLp6cV9mm5s",
        price: 89
      },
      {
        name: "Man Sneakers Under Armour Curry 8",
        imageUrl: "https://drive.google.com/uc?export=view&id=13IWecHMhSkYIQOr04HVyui3GpJ28mzxC",
        price: 151
      },
      {
        name: "Man Sneakers Nike Kyrie 7",
        imageUrl: "https://drive.google.com/uc?export=view&id=1pU5FSTgoseX-BU5PwYXK8WQ8VQeGlo4y",
        price: 112
      },
      {
        name: "Man Sneakers Jordan Air Jordan 11",
        imageUrl: "https://drive.google.com/uc?export=view&id=1nuSzfM1ibD3n0vaZpkeddLxrQlnaKoFK",
        price: 107
      },
      {
        name: "Man Sneakers Nike LeBron XVIII",
        imageUrl: "https://drive.google.com/uc?export=view&id=1uciuyNr9R24aEpusbEpdRqlXzpTu5nXt",
        price: 164
      },
      {
        name: "Man Sneakers Nike Lebron XVIII Low",
        imageUrl: "https://drive.google.com/uc?export=view&id=1-Aa1heDX8pwGIZhVOzYs9ecrF_HsYIaV",
        price: 139
      },
      {
        name: "Nike Blazer Mid Suede",
        imageUrl: "https://drive.google.com/uc?export=view&id=1L1s-ffTE2cBGxvXcgV3SniNYJ43G8AWu",
        price: 84
      },
      {
        name: "Puma X Aka Boku Future Rider",
        imageUrl: "https://drive.google.com/uc?export=view&id=1PWbLJD87wIrs3BjOzVUG_iazxu93cQI1",
        price: 89
      },
      {
        name: "Man Sneakers Nike Kyrie Flytrap IV",
        imageUrl: "https://drive.google.com/uc?export=view&id=1VcZWEkUgddO4zXLwJOqyoEQGK82dSxww",
        price: 112
      },
    ],
  });
}


async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.error(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
