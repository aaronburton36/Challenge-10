const Manager = require('../Manager');

describe('Manager', () => {
  it('should create a new Manager object with given name, id, email, and office number properties', () => {
    const manager = new Manager('John Smith', 12345, 'jsmith@example.com', 101);
    expect(manager.name).toBe('John Smith');
    expect(manager.id).toBe(12345);
    expect(manager.email).toBe('jsmith@example.com');
    expect(manager.officeNumber).toBe(101);
  });

  it('should return office number when getOfficeNumber() is called', () => {
    const manager = new Manager('John Smith', 12345, 'jsmith@example.com', 101);
    expect(manager.getOfficeNumber()).toBe(101);
  });

  it('should return "Manager" when getRole() is called', () => {
    const manager = new Manager('John Smith', 12345, 'jsmith@example.com', 101);
    expect(manager.getRole()).toBe('Manager');
  });
});
