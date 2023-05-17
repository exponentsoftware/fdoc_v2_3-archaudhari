### Day 3

1. Create a function that takes an array of `companies` as input. Each company object contains a name, an array of employee objects, and a nested object representing departments. Employee objects have a name, role, and department. The function should return a new array of companies with the same structure but with an additional property `numEmployees` and a modified `departments` object containing an array of department names and the number of employees in each department.

```js
const companies = [
  {
    name: 'Company 1',
    employees: [
      { name: 'Alice', role: 'Developer', department: 'Engineering' },
      { name: 'Bob', role: 'Manager', department: 'Engineering' },
      { name: 'Charlie', role: 'Designer', department: 'Design' },
    ],
  },
  // ... (more companies)
];

processCompanies(companies);
// Output:
[
  {
    name: 'Company 1',
    numEmployees: 3,
    employees: [ /* same as input */ ],
    departments: {
      'Engineering': 2,
      'Design': 1,
    },
  },
  // ... (more companies)
]
```

2. Create an array of objects called `projects`. Each object should have keys called `name`, `client`, and `tasks`. The `tasks` key should be an array of task objects with properties `title`, `assignee`, `status`, and `dueDate`. Then, create the following functions:

   a. `findOverdueTasks` - Returns an array of tasks with a due date before a specified date.
   
   b. `assignTaskToEmployee` - Assigns a task with a specified title to an employee with a given name, only if the employee and task exist.
   
   c. `updateTaskStatus` - Updates a task's status in a specified project only if the task and project exist. This function should be able to update the task's status.

```js
const projects = [
  // ... (Your array of projects with their information)
];

// Example usage:

findOverdueTasks(projects, '2023-05-01');
// Output: Returns an array of tasks with a due date before '2023-05-01'

assignTaskToEmployee(projects, 'Project 1', 'Task 1', 'Alice');
// Output: Assigns the task with title 'Task 1' in project 'Project 1' to the employee with name 'Alice'

updateTaskStatus(projects, 'Project 1', 'Task 1', 'In Progress');
// Output: Updates the task's status in the project with name 'Project 1'
```
