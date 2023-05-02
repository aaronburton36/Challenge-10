const Engineer = require('../Engineer');
const Employee = require('../Employee');

describe('Engineer', () => {
  it('should create a new Engineer object with given name, id, email, and github properties', () => {
    const engineer = new Engineer('John Smith', 12345, 'jsmith@example.com', 'johnsmith');
    expect(engineer.name).toBe('John Smith');
    expect(engineer.id).toBe(12345);
    expect(engineer.email).toBe('jsmith@example.com');
    expect(engineer.github).toBe('johnsmith');
  });

  it('should return github when getGithub() is called', () => {
    const engineer = new Engineer('John Smith', 12345, 'jsmith@example.com', 'johnsmith');
    expect(engineer.getGithub()).toBe('johnsmith');
  });

  it('should return "Engineer" when getRole() is called', () => {
    const engineer = new Engineer('John Smith', 12345, 'jsmith@example.com', 'johnsmith');
    expect(engineer.getRole()).toBe('Engineer');
  });

  it('should inherit properties and methods from Employee class', () => {
    const engineer = new Engineer('John Smith', 12345, 'jsmith@example.com', 'johnsmith');
    expect(engineer.getName()).toBe('John Smith');
    expect(engineer.getId()).toBe(12345);
    expect(engineer.getEmail()).toBe('jsmith@example.com');
  });
});
