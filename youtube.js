const jsonfile = require('jsonfile');
const moment =require('moment');
const simpleGit =require('simple-git'); 
const File_path ='./data.json';
const fs = require('fs');

const DATE = moment().format(); 


const makecommit = content =>{
    

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
  jsonData.passage = content;

  // Convert the updated JSON object back to a string
  const updatedData = JSON.stringify(jsonData, null, 2);

  // Write the updated JSON string back to the file
  fs.writeFile(File_path, updatedData, 'utf8', (err) => {
    if (err) {
      console.error('An error occurred while writing the file:', err);
      return;
    }
    console.log('File has been updated successfully.');
    simpleGit().add([File_path]).commit('updated file');
  });
});

    
   // const some = JSON.stringify(data);
    //console.log(some);

    //jsonfile.writeFile(File_path, some);
    
    
    
    
};

const passage = "jjfv.sdvsdhvbls.dbdvylsbv";
const passageList = passage.split(".");
for (const text of passageList) {
  makecommit(text);
}





