const fs = require('fs');
const jsome = require('jsome')

let allwords = fs.readFileSync('./words.txt','utf8');
let wordList = allwords.split('\n');
console.log(` Working with ${wordList.length} words`);
let results={}
wordList.forEach((word)=>{
    
    let letters = word.toLowerCase().replace('\'','').split('');
    
    let count = letters.reduce((count,letter)=>{
        return count+(letter.charCodeAt(0) - 96);
    },0)
    if (count===100){
        if (!results['Score 100']){
            results['Score 100']=[];
        } 
        results['Score 100'].push(word)
    }
    // } else if (count % 10 == 0 && count>9){
    //     let key = `Score ${count}`;
    //     if (!results[key]){
    //         results[key]=[]
    //     }
    //     results[key].push(word)
    // }
})
results['Score 100'].sort();
jsome(results);