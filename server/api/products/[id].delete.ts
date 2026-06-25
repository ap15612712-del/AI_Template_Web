export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, "id"));
  await prisma.product.delete({ where: { id } });
  return { message: "Product deleted" };
});
