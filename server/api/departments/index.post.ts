export default defineEventHandler(async (event) => {
  const { name } = await readBody(event);
  if (!name) throw createError({ statusCode: 400, message: "name is required" });
  return await prisma.department.create({ data: { name } });
});
