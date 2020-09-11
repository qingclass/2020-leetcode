let fs =  require('fs');

function AysnPromise(fn,...args){
    console.log(args)
    return new Promise(function(resolve,reject){
        // resolve(fn(...args,))
        fn(...args,function(err,data){
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}
let filePath =  './readme.txt';
let a = AysnPromise(fs.readFile,filePath);
a.then(function(data){
    console.log(data.toString())
}).catch(function(err){
    console.log(err)
})