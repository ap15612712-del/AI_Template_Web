export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, "id"));
  await prisma.employee.delete({ where: { id } });
  return { message: "Employee deleted" };
});
