const STORAGE_KEY = "elite-habits-v1";

const habitForm = document.getElementById("habit-form");
const habitList = document.getElementById("habit-list");
const habitTemplate = document.getElementById("habit-item-template");
const resetDayButton = document.getElementById("reset-day");

const totalHabitsElement = document.getElementById("total-habits");
const completedTodayElement = document.getElementById("completed-today");
const dailyProgressElement = document.getElementById("daily-progress");

let habits = loadHabits();
normalizeHabitsToToday();
render();

habitForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(habitForm);
  const name = String(formData.get("habitName") || "").trim();

  if (!name) return;

  habits.unshift({
    id: crypto.randomUUID(),
    name,
    completedToday: false,
    streak: 0,
    lastCompletedDate: null,
    lastSeenDate: getToday(),
  });

  persist();
  render();
  habitForm.reset();
});

resetDayButton.addEventListener("click", () => {
  habits = habits.map((habit) => ({
    ...habit,
    completedToday: false,
    lastSeenDate: getToday(),
  }));

  persist();
  render();
});

function render() {
  habitList.innerHTML = "";

  if (habits.length === 0) {
    const emptyState = document.createElement("li");
    emptyState.className = "empty";
    emptyState.textContent = "Aún no tienes hábitos. Crea el primero hoy.";
    habitList.appendChild(emptyState);
  } else {
    habits.forEach((habit) => {
      const fragment = habitTemplate.content.cloneNode(true);
      const checkbox = fragment.querySelector(".habit-check");
      const name = fragment.querySelector(".habit-name");
      const streak = fragment.querySelector(".streak");
      const deleteButton = fragment.querySelector(".delete");

      name.textContent = habit.name;
      checkbox.checked = habit.completedToday;
      streak.textContent = `Racha: ${habit.streak} día${habit.streak === 1 ? "" : "s"}`;

      checkbox.addEventListener("change", () => {
        toggleHabit(habit.id, checkbox.checked);
      });

      deleteButton.addEventListener("click", () => {
        habits = habits.filter((item) => item.id !== habit.id);
        persist();
        render();
      });

      habitList.appendChild(fragment);
    });
  }

  updateStats();
}

function toggleHabit(habitId, completed) {
  habits = habits.map((habit) => {
    if (habit.id !== habitId) return habit;

    if (completed) {
      const isConsecutiveDay = isYesterday(habit.lastCompletedDate) || habit.lastCompletedDate === getToday();
      const streak = isConsecutiveDay ? Math.max(habit.streak, 0) + 1 : 1;

      return {
        ...habit,
        completedToday: true,
        streak,
        lastCompletedDate: getToday(),
        lastSeenDate: getToday(),
      };
    }

    const streak = habit.lastCompletedDate === getToday() ? Math.max(0, habit.streak - 1) : habit.streak;
    return {
      ...habit,
      completedToday: false,
      streak,
      lastCompletedDate: streak === habit.streak ? habit.lastCompletedDate : null,
      lastSeenDate: getToday(),
    };
  });

  persist();
  updateStats();
}

function updateStats() {
  const total = habits.length;
  const completed = habits.filter((habit) => habit.completedToday).length;
  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

  totalHabitsElement.textContent = String(total);
  completedTodayElement.textContent = String(completed);
  dailyProgressElement.textContent = `${progress}%`;
}

function normalizeHabitsToToday() {
  const today = getToday();

  habits = habits.map((habit) => {
    if (habit.lastSeenDate === today) return habit;

    return {
      ...habit,
      completedToday: false,
      lastSeenDate: today,
      streak: isYesterday(habit.lastCompletedDate) ? habit.streak : 0,
    };
  });

  persist();
}

function loadHabits() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
}

function getToday() {
  return new Date().toISOString().slice(0, 10);
}

function isYesterday(dateString) {
  if (!dateString) return false;

  const date = new Date(dateString);
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  return date.toISOString().slice(0, 10) === yesterday.toISOString().slice(0, 10);
}
