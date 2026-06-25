export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, "id"));
  const body = await readBody(event);
  const { name, description, price, stock } = body;

  return await prisma.product.update({
    where: { id },
    data: {
      ...(name !== undefined && { name }),
      ...(description !== undefined && { description }),
      ...(price !== undefined && { price: Number(price) }),
      ...(stock !== undefined && { stock: Number(stock) }),
    },
  });
});
