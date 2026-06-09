import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";

const connectionString = process.env.DATABASE_URL;

const adapter = PrismaPg({ connectionString });
const prisma = PrismaClient({ adapter });

export { prisma };
