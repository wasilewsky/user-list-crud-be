import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();

  const password = await bcrypt.hash('admin123', 10);

  await prisma.user.createMany({
    data: [
      { name: 'admin', email: 'admin@example.com', password, role: 'admin' },
      { name: 'user', email: 'user@example.com', password, role: 'admin' },
      { name: 'alice', email: 'alice@example.com', password, role: 'user' },
      { name: 'bob', email: 'bob@example.com', password, role: 'user' },
      { name: 'charlie', email: 'charlie@example.com', password, role: 'user' },
    ],
  });

  console.log('✅ Seeding complete.');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed: ', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
