export default defineEventHandler(async () => {
  const [total, inStock, outOfStock, agg, recent] = await Promise.all([
    prisma.product.count(),
    prisma.product.count({ where: { stock: { gt: 0 } } }),
    prisma.product.count({ where: { stock: { lte: 0 } } }),
    prisma.product.aggregate({ _avg: { price: true }, _sum: { stock: true } }),
    prisma.product.findMany({ orderBy: { createdAt: "desc" }, take: 5 }),
  ]);

  return {
    total,
    inStock,
    outOfStock,
    avgPrice: agg._avg.price ?? 0,
    totalStock: agg._sum.stock ?? 0,
    recent,
  };
});
