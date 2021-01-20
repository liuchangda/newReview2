let a = 'hello';
let fn = () => 'world';

export { a, fn }

class Person{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log('eating');
    }
}
export default Person