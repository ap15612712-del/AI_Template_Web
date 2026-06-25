export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, description, price, stock } = body;

  if (!name || price === undefined) {
    throw createError({ statusCode: 400, message: "name and price are required" });
  }

  return await prisma.product.create({
    data: {
      name,
      description: description ?? null,
      price: Number(price),
      stock: Number(stock ?? 0),
    },
  });
});
