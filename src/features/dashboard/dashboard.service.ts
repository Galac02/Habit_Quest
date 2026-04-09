export class DashboardService {
  static async getToday(userId: string) {
    return {
      dueHabits: [],
      completedHabits: [],
      openTasks: [],
      stats: {
        completedCount: 0,
        streaksProtected: 0,
      },
    };
  }
}
