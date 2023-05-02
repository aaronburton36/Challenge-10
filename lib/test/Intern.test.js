const Intern = require('../Intern');

describe('Intern', () => {
  it('should create a new Intern object with given name, id, email, and school properties', () => {
    const intern = new Intern('John Smith', 12345, 'jsmith@example.com', 'ABC University');
    expect(intern.name).toBe('John Smith');
    expect(intern.id).toBe(12345);
    expect(intern.email).toBe('jsmith@example.com');
    expect(intern.school).toBe('ABC University');
  });

  it('should return school when getSchool() is called', () => {
    const intern = new Intern('John Smith', 12345, 'jsmith@example.com', 'ABC University');
    expect(intern.getSchool()).toBe('ABC University');
  });

  it('should return "Intern" when getRole() is called', () => {
    const intern = new Intern('John Smith', 12345, 'jsmith@example.com', 'ABC University');
    expect(intern.getRole()).toBe('Intern');
  });

  it('should inherit properties and methods from Employee class', () => {
    const intern = new Intern('John Smith', 12345, 'jsmith@example.com', 'ABC University');
    expect(intern.getName()).toBe('John Smith');
    expect(intern.getId()).toBe(12345);
    expect(intern.getEmail()).toBe('jsmith@example.com');
  });
});
