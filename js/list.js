var listDetails = [
    {
        class : document.querySelector('.down1'),
        notification : "1d ago .FullTime .USA only",
        account : document.getElementById("firstaccount"),
        parent : document.querySelector(".list"),
        list : ["frontend" , "Javascript" ,"CSS"],
    },
    {
        class : document.querySelector('.down2'),
        notification : "1d ago .PartTime .Remote",
        account : document.getElementById("secondaccount"),
        parent : document.querySelector(".list2"),
        list : ["fullstack" , "Javascript" ,"PHP"],
    },
    {
        class : document.querySelector('.down3'),
        notification : "2d ago .PartTime .USA only",
        account : document.getElementById("thirdaccount"),
        parent : document.querySelector(".list3"),
        list : ["frontend" , "Javascript" ,"HTML"],
    },
    {
        class : document.querySelector('.down4'),
        notification : "5d ago .Contract .USA only",
        account : document.getElementById("fourthaccount"),
        parent : document.querySelector(".list4"),
        list : ["frontend" , "Javascript" ,"CSS"],
    },
    {
        class : document.querySelector('.down5'),
        notification : "1w ago .FullTime .Worldwide",
        account : document.getElementById("fifthaccount"),
        parent : document.querySelector(".list5"),
        list : ["fullstack" , "Javascript" ,"PHP"],
    },
    {
        class : document.querySelector('.down6'),
        notification : "2w ago .FullTime .UK only",
        account : document.getElementById("sixthaccount"),
        parent : document.querySelector(".list6"),
        list : ["backend" , "Javascript" ,"PHP"],
    },
    {
        class : document.querySelector('.down7'),
        notification : "2w ago .FullTime .Worldwide",
        account : document.getElementById("seventhaccount"),
        parent : document.querySelector(".list7"),
        list : ["frontend" , "Javascript" ,"JQuery"],
    },
    {
        class : document.querySelector('.down8'),
        notification : "2w ago .FullTime .USA only",
        account : document.getElementById("eigthaccount"),
        parent : document.querySelector(".list8"),
        list : ["frontend" , "Javascript" ,"CSS"],
    },
    {
        class : document.querySelector('.down9'),
        notification : "3w ago .FullTime .Worldwide",
        account : document.getElementById("ninthaccount"),
        parent : document.querySelector(".list9"),
        list : ["fullstack" , "Javascript" ,"CSS"],
    },
    {
        class : document.querySelector('.down10'),
        notification : "1m ago .PartTime .Worldwide",
        account : document.getElementById("tenthaccount"),
        parent : document.querySelector(".list10"),
        list : ["frontend" , "Javascript" ,"JQuery"],
    },
];
/*function createNotification(){
    "use strict";
    for (let x= 0 ; x<listDetails.length ; x++){
        var theParagraph = document.createElement("p");
        listDetails[x].class.appendChild(theParagraph);
        theParagraph.textContent = listDetails[x].notification;
    }
};
createNotification();



for (let index=0 ; index<listDetails.length ; index++) {
    listDetails[index].account.onclick = function (){
        "use strict";
        document.body.style.overflowX="hidden";
        var theCreatedList = document.createElement("ul");
        listDetails[index].parent.classList.add("thedisplay");
        if (listDetails[index].parent.childNodes[1]&&listDetails[index].parent.childNodes[1].localName == "ul") {
            return;
        }
        listDetails[index].parent.appendChild(theCreatedList);
        
        
        for(let y= 0 ; y<listDetails[index].list.length ; y++){
            var theLists = document.createElement("li");
            theCreatedList.appendChild(theLists);
            theLists.textContent = listDetails[index].list[y];
        }
        
    }
    var exit = document.createElement("span");
    listDetails[index].parent.appendChild(exit);
        exit.textContent =  "exit";
        exit.onclick = function() {
            "use strict";
            
                listDetails[index].parent.classList.remove("thedisplay");
            
        }
     listDetails[index].parent.style.marginBottom = "-60px";   
}*/


















