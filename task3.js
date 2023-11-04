const { log } = require('console');
const fs       = require('fs');
const file_dir = 'NODEJS';
const file_wr  = 'welcome.txt';
const path     = require('path');
const currentFileNameWithoutExtension = path.basename(__filename);   
//Create A Fil Named "Welcome.txt" 
fs.writeFile(file_dir+'/'+file_wr,
'Hello Node :G\N   -\'ve Been Made By "'+currentFileNameWithoutExtension+'" FILE\N  - i\'ve been Created In "'+file_dir+'" directory!' ,
(err) =>{
    if (err) {
        console.log(err);
    return;
    }
    //Read And Console.log Data From The Written File (Welcome.TXT)
fs.readFile(file_dir+'/'+file_wr, 'utf8' , (err , data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});
});