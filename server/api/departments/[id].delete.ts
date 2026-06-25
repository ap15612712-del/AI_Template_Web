export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, 'id'));
  const count = await prisma.employee.count({ where: { departmentId: id } });
  if (count > 0) {
    throw createError({ statusCode: 400, message: `Cannot delete: ${count} employee(s) still in this department` });
  }
  await prisma.department.delete({ where: { id } });
  return { success: true };
});
