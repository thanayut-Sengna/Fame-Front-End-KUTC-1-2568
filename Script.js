// document.writeln("NATDO NATDA");
// alert("Hello World");
// alert("สวัสดีคร้า");
// console.log("NATDO");

// var FullNAme ="Thanayut";
// const Number = 20;
//     document.writeln(FullNAme);
//     document.writeln(Number);
// let result ="123abc";
// let total  = parseInt(result);
//     document.writeln(total);
// let Num = 12312231;
// let SUM = Num.toString();
//     document.writeln(SUM);
// let Fame = typeof(SUM);
//     document.writeln(Fame);
//     document.writeln(typeof(Num))

let scoll = 99;
if( scoll >= 100){
    document.writeln("สอบผ่าน");
}
else{
    document.writeln("สอบตก");
}

let Weather = 9;
    if(Weather >= 30){
        document.writeln("ร้อนมากครับ");
    } else if(Weather >= 10){
        document.writeln("เริ่มหนาว");
    } else {
        document.writeln("น้ำเย็นแล้วจ้า");
    }

var Mouth = 6;

switch(Mouth){
    case  1 : 
        document.writeln("วันจันทร์")
        break;
           case  2 : 
        document.writeln("วันอังคาร")
        break;
           case  3 : 
        document.writeln("วันพุธ")
        break;
           case  4 : 
        document.writeln("วันพฤหัสบดี")
        break;
           case  5 : 
        document.writeln("วันศุกร์")
        break;
           case  6 : 
        document.writeln("วันเสาร์")
        break;
           case  7 : 
        document.writeln("วันอาทิตย์")
        break;
           default:
        document.writeln("Kuy")
    }   

    let i = 13;
    for (i = 1 ; i <=13 ; i = i+1) {
        document.writeln("อยากกลับบ้าน");
        document.writeln(i);
    }