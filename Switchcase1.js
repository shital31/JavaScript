function switch1(val){
    var answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer="low";
            break;
        case 4:
        case 5:
        case 6:
            answer="Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer="High";
            break;
    }
    return answer;
}
console.log(switch1(1));