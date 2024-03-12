import {writeFile, readFile} from 'node:fs';

let message = "This is the best day in my coding life"

// writeFile('test.txt', message, (err)=>{
//     if (err){
//         throw err;
//     }
//     else{
//         console.log('File created!')
//     }
// })

readFile('./sample.txt','utf8', (err, data)=>{
    if(err){
        throw err
    }else{
        console.log(data)
    }
})