(
    function test(){
        console.log("hello World");
        test2();
    }
)();


    //this function test2 is not in the iife block and will not get called
    //will only get called if test2 is placed inside the iify block
    function test2(){
        console.log("Test 2");
    }