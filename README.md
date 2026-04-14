# 🧠 Habit Quest

A modern web app to help you build and maintain habits — with structure, flexibility, and (eventually) gamification.

---

## 🚀 Overview

Habit Quest is designed to make habit tracking **engaging, flexible, and rewarding**.

Unlike simple habit trackers, it focuses on:

* custom scheduling (not just daily habits)
* streaks based on **completion events**, not calendar days
* a future gamified system with XP, levels, and rewards

---

## ✨ Current Features

### ✅ Implemented

* 📝 Create habits with:

  * title
  * description
  * difficulty level
  * color
  * icon (emoji-based)

* 💾 Persistent storage via Supabase (PostgreSQL)

* 🎨 Clean dark UI with Tailwind

* 🧱 Modular backend using:

  * Next.js App Router
  * Drizzle ORM
  * Zod validation

---

### 🚧 In Development

* 📋 Habit list view (`/habits`)

  * Display created habits
  * Basic UI for habit cards

* ✔️ Habit completion

  * Mark habits as done
  * Store completion logs

* 🔥 Basic streak tracking

  * Increment per completion
  * Not yet handling misses or freezes

---

### 🧪 Planned (Next Steps)

* 📅 “Today” dashboard

  * Show habits due today
  * Show completed habits

* 🔁 Recurring habit rules

  * daily
  * every X days
  * weekly
  * fully custom schedules

* 🎯 Calendar view

  * drag & drop habits
  * combine habits + tasks
  * visual routine building

---

## 🎮 Future Features (Gamification)

* ⭐ XP system based on:

  * difficulty
  * consistency
  * overachievement

* 🪙 In-app currency

* 🧍 Levels & progression

* ❄️ Streak freeze system

  * automatic (miss once)
  * manual (pause / illness mode)

* 🏆 Achievements & milestones

---

## 🏗️ Tech Stack

### Frontend

* Next.js (App Router)
* React
* Tailwind CSS

### Backend

* Next.js API routes
* Drizzle ORM
* Zod

### Database

* Supabase (PostgreSQL)

---

## 🧠 Philosophy

This app is built around a key idea:

> A streak is not about days — it’s about **consistent completion of intent**.

That means:

* habits don’t have to be daily
* streaks are based on **successful executions**
* flexibility is built into the system

---

## 🛣️ Roadmap (High-Level)

* [x] Basic habit creation
* [x] Database integration
* [x] Habit list view
* [ ] Completion logging
* [ ] Streak system (basic)
* [ ] Recurrence engine
* [ ] Calendar UI
* [ ] Gamification system

---

## 🧪 Notes

* Currently using a mock user ID (authentication coming later)
* Schema and migrations managed via Drizzle + Supabase CLI

---

## 🤝 Contributing

This is currently a personal project, but contributions, ideas, and feedback are always welcome.

---


## 🔥 Final Goal

To build a habit tracker that is:

* flexible like a system
* motivating like a game
* simple like a checklist

---

*Built with focus, curiosity, and a lot of debugging 😄*

