export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, "id"));
  const employee = await prisma.employee.findUnique({
    where: { id },
    include: { department: { select: { id: true, name: true } } },
  });
  if (!employee) throw createError({ statusCode: 404, message: "Employee not found" });
  return employee;
});
