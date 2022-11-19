let s ="pPoooyY"
 
    let change = s.toLowerCase();
    
    let check_p = change.split("p").length;
    //p의 갯수 가져오기
    let check_y = change.split("y").length;
    //y의 갯수 가져오기

   result = check_p == check_y ? true : false;

console.log(change.split("p")