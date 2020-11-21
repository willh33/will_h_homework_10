// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Engineer extends Employee{
	constructor(name, id, email, github) {
		super(name, id, email);
		this.github = github;
	}

	getRole() {
		return "Engineer";
	}

	getGithub() {
		return this.github;
	}
}

module.exports = Engineer;


// This function retrieves the employee data
async function gatherInformation() {
    let prompts = preparePrompts(nextEmployee);

    let answer = await inquirer.prompt(prompts);
	
	let lastEmployee = employees[employees.length - 1];
	lastEmployee.setProperties(data);
	console.log(`Added Employee ${employees.length}:${JSON.stringify(lastEmployee)}`);
	// prepare for next round
	nextEmployee = data.nextRole.toLowerCase();
	if(nextEmployee !== "done"){
		prompts = preparePrompts(data.nextRole);
		console.log(`Getting Data for ${data.nextRole}`);
	}
}