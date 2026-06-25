export default defineEventHandler(async () => {
  const [total, active, onLeave, resigned, deptCount, agg, recentHires, depts] = await Promise.all([
    prisma.employee.count(),
    prisma.employee.count({ where: { status: "active" } }),
    prisma.employee.count({ where: { status: "on-leave" } }),
    prisma.employee.count({ where: { status: "resigned" } }),
    prisma.department.count(),
    prisma.employee.aggregate({ _avg: { salary: true } }),
    prisma.employee.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
      include: { department: { select: { name: true } } },
    }),
    prisma.department.findMany({
      include: { _count: { select: { employees: true } } },
      orderBy: { name: "asc" },
    }),
  ]);

  return {
    total,
    active,
    onLeave,
    resigned,
    deptCount,
    avgSalary: agg._avg.salary ?? 0,
    recentHires,
    depts,
  };
});
