//Beeps every seconds given from command line
let inputArgu =process.argv.slice(2); //take input from commandline 


if (inputArgu.length >= 1) { // skip if no argument
  for (let argu of inputArgu) { //loop through each of the arguments
    if (!isNaN(argu)) {    // skip if not a number
      setTimeout(() => {
      
        process.stderr.write(`\x07`);
        
      },argu*1000    //changes agrument inputs into seconds
      )

    }
    
  }


}

