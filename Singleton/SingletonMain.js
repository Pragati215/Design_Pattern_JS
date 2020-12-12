/********************************************************************************
 * @problem :  write a program to implememt singleton Design Pattern
 * @fileName : SingletonMain.js
 * @Auther  : Pragati Dhakane
 *******************************************************************************/
//businesslogic file is imported 

const bikeObject = require('./SingletonBusinessLogic');
let originalBike = new bikeObject();

//objects are created

let firstInstance = originalBike.getInstance();
let secondInstance = originalBike.getInstance();

firstInstance.start();
secondInstance.stop();

console.log(firstInstance.state());