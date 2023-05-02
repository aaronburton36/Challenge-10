const Employee = require('../Employee'); // or use import statement if supported

describe('Employee', () => {
  it('should create a new Employee object with given name, id, and email properties', () => {
    const employee = new Employee('John Smith', 12345, 'jsmith@example.com');
    expect(employee.name).toBe('John Smith');
    expect(employee.id).toBe(12345);
    expect(employee.email).toBe('jsmith@example.com');
  });

  it('should return name when getName() is called', () => {
    const employee = new Employee('John Smith', 12345, 'jsmith@example.com');
    expect(employee.getName()).toBe('John Smith');
  });

  it('should return id when getId() is called', () => {
    const employee = new Employee('John Smith', 12345, 'jsmith@example.com');
    expect(employee.getId()).toBe(12345);
  });

  it('should return email when getEmail() is called', () => {
    const employee = new Employee('John Smith', 12345, 'jsmith@example.com');
    expect(employee.getEmail()).toBe('jsmith@example.com');
  });

  it('should return "Employee" when getRole() is called', () => {
    const employee = new Employee('John Smith', 12345, 'jsmith@example.com');
    expect(employee.getRole()).toBe('Employee');
  });
});
