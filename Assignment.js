//Day3.1
function processCompanies(companies) {
  const newCompanies = JSON.parse(JSON.stringify(companies));

  newCompanies.forEach(company => {
    let totalEmployees = 0;
    const departmentNames = [];
    const departmentEmployees = {};

    company.employees.forEach(employee => {
      totalEmployees++;

      if (employee.department in departmentEmployees) {
        departmentEmployees[employee.department]++;
      } else {
        departmentNames.push(employee.department);
        departmentEmployees[employee.department] = 1;
      }
    });

    company.numEmployees = totalEmployees;
    company.departments = {};

    departmentNames.forEach(departmentName => {
      company.departments[departmentName] = departmentEmployees[departmentName];
    });
  });

  return newCompanies;
}

// Sample usage
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

const updatedCompanies = processCompanies(companies);
console.log(updatedCompanies);

//Day3.2

const projects = [
    {
      name: 'Project 1',
      client: 'Client A',
      tasks: [
        {
          title: 'Task 1',
          assignee: '',
          status: 'Pending',
          dueDate: '2023-05-10'
        },
        {
          title: 'Task 2',
          assignee: 'Bob',
          status: 'In Progress',
          dueDate: '2023-05-15'
        },
        // Add more tasks if needed
      ]
    },
    {
      name: 'Project 2',
      client: 'Client B',
      tasks: [
        // Add tasks for Project 2 if needed
      ]
    },
    // Add more projects if needed
  ];
  
  // Function to find overdue tasks
  function findOverdueTasks(projects, date) {
    const overdueTasks = [];
    
    for (const project of projects) {
      for (const task of project.tasks) {
        if (task.dueDate < date) {
          overdueTasks.push(task);
        }
      }
    }
    
    return overdueTasks;
  }
  
  // Function to assign a task to an employee
  function assignTaskToEmployee(projects, projectName, taskTitle, assigneeName) {
    for (const project of projects) {
      if (project.name === projectName) {
        for (const task of project.tasks) {
          if (task.title === taskTitle) {
            task.assignee = assigneeName;
            break;
          }
        }
        break;
      }
    }
  }
  
  // Function to update task status
  function updateTaskStatus(projects, projectName, taskTitle, newStatus) {
    for (const project of projects) {
      if (project.name === projectName) {
        for (const task of project.tasks) {
          if (task.title === taskTitle) {
            task.status = newStatus;
            break;
          }
        }
        break;
      }
    }
  }
  
  // Example usage:
  
  const overdueTasks = findOverdueTasks(projects, '2023-05-01');
  console.log(overdueTasks);
  // Returns an array of tasks with a due date before '2023-05-01'
  
  assignTaskToEmployee(projects, 'Project 1', 'Task 1', 'Alice');
  // Assigns the task with title 'Task 1' in project 'Project 1' to the employee with name 'Alice'
  
  updateTaskStatus(projects, 'Project 1', 'Task 1', 'In Progress');
  // Updates the task's status in the project with name 'Project 1'  

