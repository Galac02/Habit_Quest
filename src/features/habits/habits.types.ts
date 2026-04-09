export type HabitRuleType =
  | "daily"
  | "every_x_days"
  | "weekly"
  | "selected_weekdays"
  | "custom";

export type HabitDifficulty = 1 | 2 | 3;

export interface HabitSummary {
  id: string;
  title: string;
  description: string | null;
  difficulty: HabitDifficulty;
  currentStreak: number;
  isDueToday: boolean;
  isCompletedToday: boolean;
}
