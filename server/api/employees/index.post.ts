export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { firstName, lastName, email, phone, position, departmentId, salary, startDate, status } = body;

  if (!firstName || !lastName || !email || !position || !departmentId || !salary || !startDate) {
    throw createError({ statusCode: 400, message: "Missing required fields" });
  }

  return await prisma.employee.create({
    data: {
      firstName,
      lastName,
      email,
      phone: phone || null,
      position,
      departmentId: Number(departmentId),
      salary: Number(salary),
      startDate: new Date(startDate),
      status: status || "active",
    },
    include: { department: { select: { id: true, name: true } } },
  });
});
