/********************************************************************************
 * @problem :  write a program to implememt factory Design Pattern
 * @fileName : FactoryBusinessLogic.js
 * @Auther  : Pragati Dhakane
 *******************************************************************************/

class Univercity {
    constructor(id,student,rank) {
        this.id = id;
        this.student = student;
        this.rank = rank;

    }

    display() {
        console.log("Type :" +this.name);
        console.log("id :" +this.id);
        console.log("Student :" +this.student);
        console.log("Rank :" +this.rank);
    }
}
class WIT extends Univercity {
    constructor(id,student,rank) {
        super(id, student, rank);
        this.name = "WIT";
        this.display();
    }
}
class COEP extends Univercity {

    constructor(id,student,rank) {

        super(id, student, rank);
        this.name = "COEP";
        this.display();
    }
}

class univercityFactory {

    create(id,student,rank,type){

        switch (type) {
            case 1:
                return new WIT(id, student, rank);
            case 2:
                return new COEP(id, student, rank);
            default:
                console.log("Wrong choice");
                return null;
        }
    }
}
module.exports = new univercityFactory;