/********************************************************************************
 * @problem :  write a program to implememt singleton Design Pattern
 * @fileName : SingletonBusinessLogic.js
 * @Auther  : Pragati Dhakane
 *******************************************************************************/

let bike = function () {
    let bikeInstance;
    /**
     * @description : create a bike Object
     */
    function create () {
        let isMoving = false;

        function start() {
            isMoving = true;
        }

        function stop() {
            NotMoving = false;
        }

        function state() {
            return isMoving ? "Moving":"NotMoving";
        }

        return{
            start : start,
            stop : stop,
            state : state,
        }
    }
   
        return {
            getInstance : function() {
                if (!bikeInstance)bikeInstance = create();
                return bikeInstance;
            }
        }
    }       
module.exports = bike;

