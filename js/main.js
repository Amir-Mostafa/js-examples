let add=document.getElementById("add");



let allItems=[];

if(localStorage.getItem("items")!=null)
{
    allItems=JSON.parse(localStorage.getItem("items"));
    displayItems();
}
$(".add").click(function(){

    addItem();
});
function addItem()
{

    if($("#item").val()!="")
    {
    let item={
        "val":$("#item").val(),
        "completed":0
    }
    allItems.push(item);
    displayItems();
    $("#item").val("");
    localStorage.setItem("items", JSON.stringify(allItems));
    }

}

function deleteItem(index)
{
    allItems.splice(index,1);
    displayItems();
localStorage.setItem("items", JSON.stringify(allItems));
}
function completeItem(index)
{
    allItems[index].completed=1;
    displayItems();
localStorage.setItem("items", JSON.stringify(allItems));

}
function unCompleteItem(index)
{
    allItems[index].completed=0;
    localStorage.setItem("items", JSON.stringify(allItems));
    displayItems();
}
function displayItems() {
    let str=``;
    for(let i=0;i<allItems.length;i++)
    {
        str+=`

        <div class="container my-2">
        <div class="work-item d-flex ">
        `;

        if(allItems[i].completed==0)
        {
str+=
        `
          <div  onclick="completeItem(${i})" class=" text bg-white p-3 ">
        `;
        }
        else
        {
            str+= `
        <div onclick="unCompleteItem(${i})" class="text bg-white p-3 completed ">

        `
        };
        str+=
        `
            <p>
            ${allItems[i].val}
            </p>
          </div>
          <div class="button">

            <button onclick="deleteItem(${i})" class="btn btn-danger p-3 h-100 w-100 ">
              <i class="fas fa-times text-white"></i>
            </button>
          </div>
        </div>
      </div>
        `;
    }
    document.getElementById("allItems").innerHTML=str;
}


// colors section
let colors=["transparent","red","blue","green","yellow"];

var colorsInterval;
let count=0;
var sound = new Audio("ss.mp3");
$(".colors").mouseenter(function(){
    
   
    sound.play();
    $(".colors").removeClass("bg-white");
 colorsInterval=setInterval(function(){
    count+=1;
    count%=colors.length;
    $(".colors").css("background-color",colors[count]);
    
    
},400)
});
$(".colors").mouseleave(function(){
    clearInterval(colorsInterval);
    $(".colors").addClass("bg-white");
    sound.pause();
})

//end colors section

// start clock section

let timeInterval=setInterval(function(){
    var future = new Date("sep 8,2021 00:01:00").getTime();
    var current=new Date().getTime();  
    miliSeconds=future- current;//miliseconds
    //get nuber od dayes 
    let days= miliSeconds/1000;  //to get seconds
    days/=60;        //to get minutes
    days/=60;       //to get houres
    days/=24;       //to get dayes
    let remenderDays=days-Math.floor(days);
    days=Math.floor(days);
    let rementerHoures=remenderDays*24;
    let houres=Math.floor(rementerHoures)
    let minutes=(rementerHoures- Math.floor(rementerHoures))*60;
    minutes=Math.floor(minutes);
    let seconds=Math.floor(((rementerHoures- Math.floor(rementerHoures))*60-minutes)*60);
    $("#day h5").html(days);
    $("#hours h5").html(houres);
    $("#minutes h5").html(minutes);
    $("#seconds h5").html(seconds);
    
    
},1000)







// end clock ssection

$(".r").mouseenter(function(){

    $(".rgb").css("background-color","red");
});
$(".r").mouseleave(function(){

    $(".rgb").css("background-color","transparent");
});
$(".g").mouseenter(function(){

    $(".rgb").css("background-color","green");
});
$(".g").mouseleave(function(){

    $(".rgb").css("background-color","transparent");
});
$(".b").mouseenter(function(){

    $(".rgb").css("background-color","blue");
});
$(".b").mouseleave(function(){

    $(".rgb").css("background-color","transparent");
});


// form validation
$("#send").attr("disabled",true);
var regexName=/(^([A-Za-z]{3,10}\s|[A-Za-z]{3,10}){1,3}$)/;
var regexMail=/^[a-zA-z1-9]{3,20}["@"][a-zA-Z]{3,8}[".][a-zA-Z]{2,10}/;
var regexPhone=/^01[0125][0-9]{8}$/

$("#send").click(function(){

    check();
});
$("#username").keyup(function(){
    if(!regexName.test($("#username").val()))
    {
        $(this).addClass("is-invalid")
        $(this).removeClass("is-valid")
        $(".username").css("display","block");
    }
    else
    {
        $(this).removeClass("is-invalid")
        $(this).addClass("is-valid") 
        $(".username").css("display","none");
    }
    check();
})

$("#mail").keyup(function(){
    if(!regexMail.test($("#mail").val()))
    {
        $(this).addClass("is-invalid")
        $(this).removeClass("is-valid")
        $(".mail").css("display","block");
    }
    else
    {
        $(this).removeClass("is-invalid")
        $(this).addClass("is-valid") 
        $(".mail").css("display","none");
    }
    check();
});
$("#phone").keyup(function(){
    if(!regexPhone.test($("#phone").val()))
    {
        $(this).addClass("is-invalid")
        $(this).removeClass("is-valid")
        $(".phone").css("display","block");
    }
    else
    {
        $(this).removeClass("is-invalid")
        $(this).addClass("is-valid") 
        $(".phone").css("display","none");
    }
    check();
});
$("#message").keyup(function(){
    
    let text=$(this).val();
    let remendr=100-text.length;
    $(".form-group p").html(`${remendr} lettre remailng`);
    if(text.length>=90)
        $(".form-group p").css("color","red");
    else
    $(".form-group p").css("color","black");

    check();
});
function check()
{
    if(regexName.test($("#username").val())&&regexPhone.test($("#phone").val())&&regexMail.test($("#mail").val())&&($("#message").val().length<=100)&&($("#message").val().length>010))
    {
     
        $("#send").attr("disabled",false);
    }
    else
    $("#send").attr("disabled",true);
}

// let allTop=[];
// allTop.push($(".work").offset().top);
// allTop.push($(".colors").offset().top);
// allTop.push($(".clock").offset().top);
// allTop.push($(".rgb").offset().top);
// allTop.push($(".form").offset().top);
// var x=$(window).scrollTop();
// let section=0;
// console.log(allTop);
// $(window).scroll(function(){
//     if($(this).scrollTop()<x&&allTop.includes($(this).scrollTop()))
//     {
//         alert("s")
//         if(section!=0)
//             section--;
       
//         $(this).scrollTop(allTop[section]);
       
        
//     }
//     else if($(this).scrollTop()>x&&allTop.includes($(this).scrollTop()))
//     {
//         if(section<allTop.length)
//             section++;
//         $(this).scrollTop(allTop[section]);
//     }
//     x=$(this).scrollTop();
// })

// end form validation