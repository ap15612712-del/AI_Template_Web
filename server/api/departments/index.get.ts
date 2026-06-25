export default defineEventHandler(async () => {
  return await prisma.department.findMany({
    include: { _count: { select: { employees: true } } },
    orderBy: { name: "asc" },
  });
});
