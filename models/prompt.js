const prompt = require('prompt');
const colors = require("colors/safe");

prompt.message = colors.red(`> Welcome the the Bangazon Continuing Ed Course Creator
Please choose an action from the following:
  1 create a new course
  2 edit an existing course
  3 remove a course
  4 view an upcoming course
  5 view all upcoming courses
  6 view a past course
  7 view all past courses`)

  prompt.delimiter = colors.red("* *");

prompt.start();

const userPrompts = [
    {
        name: "choice",
        description: "selection",
        pattern: /(0|[1-9][0-9]*)/,
        message: "Please enter numbers only"

    }
]

prompt.get(userPrompts,(err,result)=>{
    if (err){return onError(err)}
    console.log(result.choice)
})