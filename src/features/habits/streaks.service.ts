export class StreaksService {
  static async recalculateForHabit(habitId: string) {
    // later:
    // 1. fetch occurrences
    // 2. walk through them in order
    // 3. apply freeze rules
    // 4. update habit_streaks
    return {
      habitId,
      currentStreak: 0,
      longestStreak: 0,
    };
  }
}
