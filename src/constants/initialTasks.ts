export interface TaskType {
  id: string;
  title: string;
  completed: boolean;
}

export const INITIAL_TASKS: TaskType[] = [
  {
    id: "t1",
    title: "Finish the project",
    completed: false,
  },
  {
    id: "t2",
    title: "Study for the exam",
    completed: true,
  },
  {
    id: "t3",
    title: "Plan the next trip",
    completed: false,
  },
  {
    id: "t4",
    title: "Read a new book",
    completed: false,
  },
  {
    id: "t5",
    title: "Complete daily exercises",
    completed: true,
  },
  {
    id: "t6",
    title: "Organize weekly schedule",
    completed: false,
  },
  {
    id: "t7",
    title: "Prepare project presentation",
    completed: false,
  },
  {
    id: "t8",
    title: "Review important notes",
    completed: true,
  },
  {
    id: "t9",
    title: "Learn something new",
    completed: false,
  },
  {
    id: "t10",
    title: "Clean the workspace",
    completed: false,
  },
];
export const TASK_STATS = {
  total: INITIAL_TASKS.length,
  completed: INITIAL_TASKS.filter(task => task.completed).length,
  pending: INITIAL_TASKS.filter(task => !task.completed).length,
} as const;