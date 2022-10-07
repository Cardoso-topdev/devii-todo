export type Task = {
  id: string;
  task: string;
  completed: Date | null;
  cancelled: Date | null;
  userid: number;
  user: User;
};

export type User = {
  roleid: number;
  login: string;
  email: string;
  tasks_collection?: Array<Task>;
};

export type TaskInput = {
  task: string;
  completed: Date | null;
  cancelled: Date | null;
  userid: number;
};

export type UserInput = {
  roleid: number;
  login: string;
  email: string;
};

export type Record = {
  status?: string;
} & Task;
