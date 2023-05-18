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
