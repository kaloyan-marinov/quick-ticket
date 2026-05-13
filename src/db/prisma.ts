import { PrismaClient } from "@/generated/prisma";

/*
`globalThis` is a global JavaScript object
(like `window` is for web browsers, or `global` for Node.js)
*/
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
