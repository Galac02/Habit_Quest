import {
  boolean,
  integer,
  jsonb,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { users } from "./users";

export const habits = pgTable("habits", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").notNull().references(() => users.id),
  title: text("title").notNull(),
  description: text("description"),
  color: text("color"),
  icon: text("icon"),
  difficulty: integer("difficulty").notNull().default(1),
  isActive: boolean("is_active").notNull().default(true),
  allowEarlyCompletion: boolean("allow_early_completion").notNull().default(true),
  streakFreezeConfig: jsonb("streak_freeze_config"),
  archivedAt: timestamp("archived_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const habitRules = pgTable("habit_rules", {
  id: uuid("id").defaultRandom().primaryKey(),
  habitId: uuid("habit_id").notNull().references(() => habits.id),
  ruleType: text("rule_type").notNull(), // daily | every_x_days | weekly | selected_weekdays | custom
  intervalValue: integer("interval_value"),
  weekdays: jsonb("weekdays"),
  timesPerPeriod: integer("times_per_period").notNull().default(1),
  periodType: text("period_type").notNull().default("day"),
  startDate: timestamp("start_date", { withTimezone: true }).notNull(),
  endDate: timestamp("end_date", { withTimezone: true }),
  customRuleJson: jsonb("custom_rule_json"),
});

export const habitOccurrences = pgTable("habit_occurrences", {
  id: uuid("id").defaultRandom().primaryKey(),
  habitId: uuid("habit_id").notNull().references(() => habits.id),
  dueAt: timestamp("due_at", { withTimezone: true }).notNull(),
  windowStart: timestamp("window_start", { withTimezone: true }),
  windowEnd: timestamp("window_end", { withTimezone: true }),
  status: text("status").notNull().default("pending"), // pending | completed | missed | frozen | skipped
  completedLogId: uuid("completed_log_id"),
  ruleSnapshot: jsonb("rule_snapshot"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const habitCompletionLogs = pgTable("habit_completion_logs", {
  id: uuid("id").defaultRandom().primaryKey(),
  habitId: uuid("habit_id").notNull().references(() => habits.id),
  userId: uuid("user_id").notNull().references(() => users.id),
  occurrenceId: uuid("occurrence_id"),
  completedAt: timestamp("completed_at", { withTimezone: true }).notNull(),
  source: text("source").notNull().default("manual"),
  note: text("note"),
  xpAwarded: integer("xp_awarded").default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const habitStreaks = pgTable("habit_streaks", {
  id: uuid("id").defaultRandom().primaryKey(),
  habitId: uuid("habit_id").notNull().references(() => habits.id).unique(),
  currentStreak: integer("current_streak").notNull().default(0),
  longestStreak: integer("longest_streak").notNull().default(0),
  freezeCountAvailable: integer("freeze_count_available").notNull().default(1),
  lastCompletedAt: timestamp("last_completed_at", { withTimezone: true }),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});
