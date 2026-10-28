import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // migrate harus lewat koneksi langsung, bukan PgBouncer
    url: process.env["DIRECT_URL"] ?? process.env.DATABASE_URL,
  },
});
