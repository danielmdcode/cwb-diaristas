import { prisma } from "../src/lib/prisma";
import * as bcrypt from "bcryptjs";

async function main() {
  try {
    const adminExists = await prisma.user.findFirst({
      where: {
        role: "ADMINISTRATOR",
      },
    });

    if (!adminExists) {
      const defaultPassword = process.env.DEFAULT_ADMIN_PASSWORD || "admin123";
      const hashedPassword = await bcrypt.hash(defaultPassword, 10);

      const admin = await prisma.user.create({
        data: {
          email: "admin@cwbdiaristas.com.br",
          password: hashedPassword,
          nome: "Administrador",
          role: "ADMINISTRATOR",
          status: "ACTIVE",
        },
      });

      console.log("Default administrator user created successfully");
      console.log("Email:", admin.email);
      console.log("Password:", defaultPassword);
    } else {
      console.log("Administrator user already exists");
    }
  } catch (error) {
    console.error("Error initializing admin user:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main(); 