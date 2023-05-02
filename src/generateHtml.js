const generateHTML = employees => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="style.css">
        <title>My Team</title>
      </head>
      <body>
        <header>
          <h1>My Team</h1>
        </header>
        <main>
          <div class="container">
            ${employees.map(employee => {
              let info = '';
              let link = '';

              switch (employee.getRole()) {
                case 'Manager':
                  info = `Office number: ${employee.getOfficeNumber()}`;
                  break;

                case 'Engineer':
                  info = `GitHub: ${employee.getGithub()}`;
                  link = `https://github.com/${employee.getGithub()}`;
                  break;

                case 'Intern':
                  info = `School: ${employee.getSchool()}`;
                  break;
              }

              return `
                <div class="card">
                  <div class="card-header">
                    <h2>${employee.getName()}</h2>
                    <h3>${employee.getRole()}</h3>
                  </div>
                  <div class="card-body">
                    <p>ID: ${employee.getId()}</p>
                    <p>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                    <p>${info}</p>
                    <p>${link ? `GitHub: <a href="${link}" target="_blank">${employee.getGithub()}</a>` : ''}</p>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </main>
      </body>
    </html>
  `;
};

module.exports = generateHTML;
