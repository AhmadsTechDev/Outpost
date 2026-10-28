import { PrismaClient } from "@/lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

// Menyimpan instance Prisma secara global saat development
const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

// Membuat adapter PostgreSQL menggunakan URL database
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

// Menggunakan instance Prisma yang sudah ada atau membuat instance baru
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({ adapter });

// Mencegah pembuatan instance berulang saat hot reload di development
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}