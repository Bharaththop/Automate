const jsonfile = require('jsonfile');
const moment =require('moment');
const simpleGit =require('simple-git'); 
const File_path ='./data.json';
const fs = require('fs');

const DATE = moment().format(); 


const makecommit = n =>{
    if (n===0) return simpleGit().push();
    const min = 0;
    const max = 6;
    const max1= 54

    const x = Math.floor(Math.random() * (max - min + 1)) + min;
    const y = Math.floor(Math.random() * (max1 - min + 1)) + min;
    

    
    
    const DATE =moment().subtract(1,'y').add(y,'w').add(x,'d').format();
    
    
    

    

   



// Read the JSON file
    fs.readFile(File_path, 'utf8', (err, data) => {
    if (err) {
        console.error('An error occurred while reading the file:', err);
        return;
    }

  // Parse the JSON data
    let jsonData;
    try {
        jsonData = JSON.parse(data);
    } catch (error) {
        console.error('Error parsing JSON:', error);
        return;
    }

  // Modify the value
  jsonData.date = DATE;

  // Convert the updated JSON object back to a string
  const updatedData = JSON.stringify(jsonData, null, 2);

  // Write the updated JSON string back to the file
  fs.writeFile(File_path, updatedData, 'utf8', (err) => {
    if (err) {
      console.error('An error occurred while writing the file:', err);
      return;
    }
    console.log('File has been updated successfully.');
    simpleGit().add([File_path]).commit('updated file',
    makecommit.bind(this,--n));
  });
});

    
   // const some = JSON.stringify(data);
    //console.log(some);

    //jsonfile.writeFile(File_path, some);
    
    
    
    
};
makecommit(50);




