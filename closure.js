

//createAddition is outer funciton
//addThemUp is innerfunction

//outer function return inner function
function createAddition(){
    function addThemUp(a,b){
        let result = a + b;
        return result
    }

    return addThemUp;
}

//call the outer function to return inner function object
let addThemUp = createAddition()
//invoke inner function object
let result = addThemUp(1,2);
console.log(result);