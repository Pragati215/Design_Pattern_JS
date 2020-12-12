/*******************************************************************************************************
 * @problem :  write a program to implememt factory Design Pattern
 * @fileName : FactoryMain.js
 * @Auther  : Pragati Dhakane
 *******************************************************************************/

 // Business Logic file imported 
const univercityFactory = require('./FactoryBusinessLogic');

//Objects are created 
var tempObj = univercityFactory.create(11,100,"1",2);
console.log("created COEP");
    
var tempObj = univercityFactory.create(23,150,"3",1);
console.log("created WIT");
