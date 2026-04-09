import { boolean, pgTable, text, timestamp, uuid, jsonb } from "drizzle-orm/pg-core";
import { users } from "./users";
import { habits } from "./habits";
import { tasks } from "./tasks";

export const calendarItems = pgTable("calendar_items", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").notNull().references(() => users.id),
  itemType: text("item_type").notNull(), // habit_instance | habit_template | task | event
  habitId: uuid("habit_id").references(() => habits.id),
  taskId: uuid("task_id").references(() => tasks.id),
  titleSnapshot: text("title_snapshot").notNull(),
  startsAt: timestamp("starts_at", { withTimezone: true }).notNull(),
  endsAt: timestamp("ends_at", { withTimezone: true }).notNull(),
  allDay: boolean("all_day").notNull().default(false),
  isRecurringTemplate: boolean("is_recurring_template").notNull().default(false),
  recurrenceRuleJson: jsonb("recurrence_rule_json"),
  isCompleted: boolean("is_completed").notNull().default(false),
  completedAt: timestamp("completed_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});
