export default defineEventHandler(async () => {
  return await prisma.employee.findMany({
    include: { department: { select: { id: true, name: true } } },
    orderBy: { createdAt: "desc" },
  });
});
