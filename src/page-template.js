// Manager HTML
const generateTeam = team => {
    const generateManager = manager => {
        return `
        <div class="card col-4 m-3 bg-info custom-card">
        <div class="card-body">
            <h5 class="card-title text-center role fs-2">${manager.getRole()}</h5>
            <h6 class="card-subtitle mb-2 text-center text-light pt-2 fs-4">${manager.getName()}</h6>
            <ul class="card-text list-style fs-5">
                <li>Employee ID: ${manager.getId()}</li>
                <li>Office Number: ${manager.getOfficeNum()}</li>
            </ul>
            <div class="text-center fs-5">
                <a href="mailTo:${manager.getEmail()}" class="card-link text-light">${manager.getEmail()}</a>
            </div>
        </div>
    </div>
    `;
    };
    const generateEngineer = engineer => {
        return `
        <div class="card col-4 m-3 bg-info custom-card">
        <div class="card-body">
            <h5 class="card-title text-center role fs-2">${engineer.getRole()}</h5>
            <h6 class="card-subtitle mb-2 text-center text-light pt-2 fs-4">${engineer.getName()}</h6>
            <ul class="card-text list-style fs-5">
                <li>Employee ID: ${engineer.getId()}</li>
            </ul>
            <div class="text-center fs-5">
                <a href="mailTo:${engineer.getEmail()}" class="card-link text-light">${engineer.getEmail()}</a>
                <a href="https://github.com/${engineer.getGitHub()}" class="card-link text-light">${engineer.getGitHub()}</a>
            </div>
        </div>
    </div>
        `;
    };
    const generateIntern = intern => {
        return `
        <div class="card col-4 m-3 bg-info custom-card">
                <div class="card-body">
                    <h5 class="card-title text-center role fs-2">${intern.getRole()}</h5>
                    <h6 class="card-subtitle mb-2 text-center text-light pt-2 fs-4">${intern.getName()}</h6>
                    <ul class="card-text list-style fs-5">
                        <li>Employee ID: ${intern.getID()}</li>
                        <li>School: ${intern.getSchool()}</li>
                    </ul>
                    <div class="text-center fs-5">
                        <a href="mailTo:${intern.getEmail()}" class="card-link text-light">${intern.getEmail()}</a>
                    </div>
                </div>
            </div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");
};

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Karla&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./style.css">
    </head>
    
    <body class="bg-secondary">
        <header class="text-center bg-dark text-light py-3">
            <h1>My Team</h1>
        </header>
        <main class="container">
            <section id="team-information" class="row py-3 justify-content-center">
                ${generateTeam(team)}
            </section>
        </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
            crossorigin="anonymous"></script>
    </body>
    
    </html>
    `;
};