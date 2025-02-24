console.log('xyz file executed successfully');

// Behind the scenes How it works is 
// Module is wrapped with IIFE - Immediately Invoved Function Expression

// (function (module,require){
//     console.log('xyz file executed successfully');
//     const data = [1,2,3];
//     module.exports={data};
// })();