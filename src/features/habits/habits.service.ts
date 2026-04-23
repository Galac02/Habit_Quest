import { db } from "@/db";
import { habits, habitRules } from "@/db/schema/habits";
import { CreateHabitInput } from "./habits.validation";
import { dayPassed } from "@/components/habits/habit-functions";
import { oneDay } from "@/components/habits/habit-functions";

export class HabitsService {
  /*   static async listByUser(userId: string) {
      return db.select().from(habits);
    }
  */
  static async listAll() {
    return db.select().from(habits);
  }

  static async create(userId: string, input: CreateHabitInput) {
    const [habit] = await db
      .insert(habits)
      .values({
        userId,
        title: input.title,
        description: input.description,
        difficulty: input.difficulty,
        allowEarlyCompletion: input.allowEarlyCompletion,
      })
      .returning();

    var endDateVar = new Date();
    if (input.rule.periodType == "day") {
      endDateVar.setDate(endDateVar.getDate() + input.rule.timesPerPeriod);
    } else if (input.rule.periodType == "week") {
      endDateVar.setDate(endDateVar.getDate() + input.rule.timesPerPeriod * 7);
    } else if (input.rule.periodType == "month") {
      endDateVar.setDate(endDateVar.getDate() + input.rule.timesPerPeriod * 30);
    }

    await db.insert(habitRules).values({
      habitId: habit.id,
      //ruleType: input.rule.ruleType,
      intervalValue: input.rule.intervalValue,
      weekdays: input.rule.weekdays,
      timesPerPeriod: input.rule.timesPerPeriod,
      periodType: input.rule.periodType,
      startDate: new Date(input.rule.startDate),
      endDate: endDateVar,
    });

    return habit;
  }
}
