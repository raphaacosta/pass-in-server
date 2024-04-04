import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: '51ac9b89-7666-4a8c-bbf0-e8bfc97dc68e',
      title: 'Unite Summit',
      slug: 'unite-summit',
      details: 'Um evento p/ dev apaixonados(as) por código!',
      maximumAttendees: 120,
    }
  })
}

seed().then(() => {
  console.log('database seeded"');
  prisma.$disconnect();
})