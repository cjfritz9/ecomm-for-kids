import prisma from '@/prisma/client';
import { getCollectionById } from './collection.model';

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

export const getStoreProductsByOwnerId = async (ownerId: string) => {
  let user = await prisma.user.findUnique({
    where: {
      id: ownerId,
    },
  });

  if (!user) return null;

  if (user?.activeStoreId === null) {
    const store = await prisma.store.findFirst({
      where: {
        ownerId: user.id,
      },
    });

    if (!store || !store.collectionId) return null;

    user = await prisma.user.update({
      where: {
        id: ownerId,
      },
      data: {
        activeStoreId: store.id,
      },
    });

    return await getCollectionById(store.collectionId);
  } else {
    const store = await prisma.store.findUnique({
      where: {
        id: user.activeStoreId,
      },
    });

    if (!store || !store.collectionId) return null;

    return await getCollectionById(store.collectionId);
  }

  return null;
};
