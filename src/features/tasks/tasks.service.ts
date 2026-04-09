import { db } from "@/db";
import { tasks } from "@/db/schema/tasks";

export class TasksService {
  static async listByUser(userId: string) {
    return db.select().from(tasks);
  }

  static async create(userId: string, title: string) {
    const [task] = await db.insert(tasks).values({
      userId,
      title,
    }).returning();

    return task;
  }
}
