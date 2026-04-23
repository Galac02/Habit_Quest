import { z } from "zod";

export const createHabitSchema = z.object({
  title: z.string().min(1).max(120),
  description: z.string().max(500).optional(),
  difficulty: z.number().int().min(1).max(3).default(1),
  color: z.number().int().min(0x0).max(0xffffff).default(0),
  icon: z.string().min(1).max(120),
  allowEarlyCompletion: z.boolean().default(true),
  rule: z.object({
    intervalValue: z.number().int().positive().optional(),
    weekdays: z.array(z.number().int().min(0).max(6)).optional(),
    timesPerPeriod: z.number().int().positive().default(1),
    periodType: z.enum(["day", "week", "month"]).default("day"),
    startDate: z.string(),
    endDate: z.string(),
  }),
});

export type CreateHabitInput = z.infer<typeof createHabitSchema>;
