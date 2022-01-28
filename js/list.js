var listContent=[
            {
                image:"imgs/photosnap.svg",
                name:"Photosnap",
                title:"Senior Frontend Developer",
                status:"1d ago .FullTime .USA only",
                cards:["Frontend","Senior","HTML","CSS","Javascript"],
                signs:["New!","Featured"],
                menu:["Frontend","Senior","Javascript"],
            },
            {
                image:"imgs/manage.svg",
                name:"Manage",
                title:"Fullstack Developer",
                status:"1d ago .PartTime .Remote",
                cards:["Fullstack","Midweight","Python","React"],
                signs:["New!","Featured"],
                menu:["Fullstack","Python","React"],
            },
            {
                image:"imgs/account.svg",
                name:"Account",
                title:"Junior Frontend Developer",
                status:"2d ago .PartTime .USA only",
                cards:["Frontend","Junior","React","Sass","Javascript"],
                signs:["New!"],
                menu:["Frontend","Junior","React"],
            },
            {
                image:"imgs/myhome.svg",
                name:"My Home",
                title:"Junior Frontend Developer",
                status: "5d ago .Contract .USA only",
                cards:["frontend","Junior","Css","Javascript"],
                signs:[],
                menu:["Frontend","Junior","Javascript"],
            },
            {
                image:"imgs/loop-studios.svg",
                name:"Loop Studios",
                title:"Software Engineer",
                status:"1w ago .FullTime .Worldwide",
                cards:["Fullstack","Midweight","Javascript","Sass","Ruby"],
                signs:[],
                menu:["FullStack","Sass","Javascript"],
            },
            {
                image:"imgs/faceit.svg",
                name:"FaceIt",
                title:"Junior Backend Developer",
                status:"2w ago .FullTime .UK only",
                cards:["backend","Junior","Ruby","RoR"],
                signs:[],
                menu:["Backend","Junior"],
            },
            {
                image:"imgs/shortly.svg",
                name:"Shortly",
                title:"Junior Developer",
                status:"2w ago .FullTime .Worldwide",
                cards:["Frontend","Junior","HTML","Sass","Javascript"],
                signs:[],
                menu:["Frontend","Junior","Javascript"],
            },
            {
                image:"imgs/insure.svg",
                name:"Insure",
                title:"Junior Frontend Developer",
                status:"2w ago .FullTime .USA only",
                cards:["Frontend","Junior","Vue","Javascript","Sass"],
                signs:[],
                menu:["Frontend","Junior","Javascript"],
            },
            {
                image:"imgs/eyecam-co.svg",
                name:"Eyecam Co.",
                title:"Full Stack Engineer",
                status:"3w ago .FullTime .Worldwide",
                cards:["Fullstack","Mideight","Javascript","Django","Python"],
                signs:[],
                menu:["FullStack","Python","Javascript"],
            },
            {
                image:"imgs/the-air-filter-company.svg",
                name:"The Air Filter Company",
                title:"Front-end Dev",
                status:"1m ago .PartTime .Worldwide",
                cards:["Frontend","Junior","React","Sass","Javascript"],
                signs:[],
                menu:["Frontend","Junior","React"],
            },
];






//Build the lists
$(document).ready(function(){
        "use strict";
        for (let index=0 ;index<listContent.length; index++){
            
            var theRow=document.createElement("div"),
            theImageContainer=document.createElement("div"),
            theCardsContainer=document.createElement("div"),
            theDataContainer=document.createElement("div"),
            theUpperData=document.createElement("div"),
            theMiddleData=document.createElement("div"),
            theLowerData=document.createElement("div"),
            theImage=document.createElement("img"),
            theTitle=document.createElement("h4"),
            theName=document.createElement("p"),
            theStatus=document.createElement("p"),
            theMenu=document.createElement("div");
            var theClear=document.createElement("span");
             
$(theRow).appendTo(".content-container").addClass("row list");
$(theMenu).prependTo(theRow).hide().addClass("the-menu container col-xl-8 col-md-12");
$(theClear).appendTo(theMenu);
for(let y=0 ;y<listContent[index].menu.length ; y++){
    var contentOfMenu=document.createElement("button");
    $(contentOfMenu).prependTo(theMenu);
    $(contentOfMenu).text(listContent[index].menu[y]).addClass("content-of-menu");
}
$(theClear).text("Exit").addClass("the-clear ms-auto").on("click",function(){
            $(this).parent().hide();
        });
$(theImageContainer).appendTo(theRow).addClass("image-container col-xl-1  col-md-12 d-flex align-items-center").append(theImage);
$(theImage).attr("src",listContent[index].image);
$(theDataContainer).appendTo(theRow).addClass("data col-xl-6 col-md-12 d-flex");
$(theUpperData).appendTo(theDataContainer).addClass("up align-items-start");
$(theName).appendTo(theUpperData).text(listContent[index].name);
        for(let i=0; i<listContent[index].signs.length;i++){
            var theButton=document.createElement("button"); 
$(theButton).appendTo(theUpperData).text(listContent[index].signs[i]).addClass("signs");
$(theUpperData).children().eq(1).css({
    "backgroundColor":"darkcyan",
    "color":"lightcyan",
    "borderRadius":"10px",
})
$(theUpperData).children().eq(2).css({
    "backgroundColor":"black",
    "color":"white",
    "borderRadius":"10px",
})
        }
$(theMiddleData).appendTo(theDataContainer).addClass("mid align-items-center");
$(theTitle).appendTo(theMiddleData).text(listContent[index].title).addClass("the-title");
$(theLowerData).appendTo(theMiddleData).addClass("down align-items-end");
$(theStatus).appendTo(theLowerData).text(listContent[index].status).css("color","darkgrey");
$(theCardsContainer).appendTo(theRow).addClass("buttons col-xl-5  col-md-12  align-self-center");
        for(let x=0 ;x<listContent[index].cards.length;x++){
            var theCards=document.createElement("button");
            $(theCards).appendTo(theCardsContainer).text(listContent[index].cards[x]);
        }
    }

})





//the Menu
$(document).ready(function(){
for(let index=0;index<listContent.length;index++){
    $(".the-title").eq(index).on("click",function(){
           $(".the-menu").eq(index).show(); 
    });
}           
})













