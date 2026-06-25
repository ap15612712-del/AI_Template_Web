export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, "id"));
  const body = await readBody(event);
  const { firstName, lastName, email, phone, position, departmentId, salary, startDate, status } = body;

  return await prisma.employee.update({
    where: { id },
    data: {
      ...(firstName !== undefined && { firstName }),
      ...(lastName !== undefined && { lastName }),
      ...(email !== undefined && { email }),
      ...(phone !== undefined && { phone }),
      ...(position !== undefined && { position }),
      ...(departmentId !== undefined && { departmentId: Number(departmentId) }),
      ...(salary !== undefined && { salary: Number(salary) }),
      ...(startDate !== undefined && { startDate: new Date(startDate) }),
      ...(status !== undefined && { status }),
    },
    include: { department: { select: { id: true, name: true } } },
  });
});
