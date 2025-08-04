let reslut = document.querySelector(".Test-2");
let color  = document.getElementById("Test");
let body   = document.querySelector("body");


    function chick(){
        if(color.style.color === "black"){
            color.style.color= "red"
        }else{
            color.style.color = "black"
        }
    }

//ฟังชั่นรับค่า
    function pluss(nume,numeone){
        return document.writeln(nume * numeone);
    }
    pluss(20 , 50);

    function colorbg(){
     if (reslut.getAttribute("class") === "Test-2") {
            reslut.setAttribute("class", "Test-2-2");
        } else {
            reslut.setAttribute("class", "Test-2");
            }
    }

    function DarkMode(){
        if(body.getAttribute("class") === "ligthMode"){
            body.setAttribute("class","DarkMode");
        }else{
            body.setAttribute("class","ligthMode")
        }
    }
    function println(){
        let print = document.querySelector("#print");
        let inputtext = document.querySelector("#inputtext").value;
        print.innerText = inputtext;
        console.log(inputtext)    
    }