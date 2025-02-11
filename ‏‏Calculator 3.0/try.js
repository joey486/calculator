var a = 'Math.sin(90 * Math.PI/180)';

switch(a){
    case 1:
        console.log("a is 1");
        break;
    case 2:
        console.log("a is 2");
        break;
    case 3:
        console.log("a is 3");
        break;
    case 4:
        console.log("a is 4");
        break;
    default:
        console.log(eval(a));
        break;
}