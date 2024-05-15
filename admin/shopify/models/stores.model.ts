import prisma from '@/prisma/client';

export const getStoresByOwnerId = async (ownerId: string) => {
  const [user, stores] = await Promise.all([
    prisma.user.findUnique({
      where: {
        id: ownerId,
      },
    }),
    prisma.store.findMany({
      where: {
        ownerId,
      },
    }),
  ]);

  if (user?.activeStoreId === null && stores?.length) {
    prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        activeStoreId: stores[0].id,
      },
    });
  }

  return stores.sort((a, b) => {
    if (a.id === user?.activeStoreId) {
      return -1;
    }
    if (b.id === user?.activeStoreId) {
      return 1;
    }

    return 0;
  });
};
