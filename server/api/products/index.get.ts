export default defineEventHandler(async () => {
  return await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });
});
