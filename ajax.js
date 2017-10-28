
document.getElementById("loadbutton").addEventListener("click", ajaxcall);

function ajaxcall(){
   
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "https://assets.breatheco.de/json/project_list.php", true);
    ajax.addEventListener("load", ajaxArrives);
    ajax.send();
    

}

function ajaxArrives(event){
    
    var cardContent ='<div class="card" style="width: 20rem;">' +
          '<img class="card-img-top" src="%img%" alt="Card image cap">' +
          '<div class="card-body">'+
            '<h4 class="card-title">%title%</h4>'+
            '<p class="card-text">%desc%</p>'+
          '</div>'+
        '</div>';
    
         
    
    var jsonObj = JSON.parse(event.target.response);
       
      var text ="";
      var wholeContent = "";
        
        for (var i = 0 ; i <jsonObj.length; i++) {
            
            text = cardContent.replace("%img%", jsonObj[i].thumb);
            text = text.replace("%title%", jsonObj[i].name);
            text = text.replace("%desc%", jsonObj[i].description);
            wholeContent += text;
            
            // text = "<li>" + jsonObj[i].name + "</li>";
            // document.getElementById("getList").innerHTML += text;
            
            // text = "<li>" + jsonObj[i].thumb + "</li>";
            // document.getElementById("getList").innerHTML += text;

            // text = "<li>" + jsonObj[i].description + "</li>";
            // document.getElementById("getList").innerHTML += text;
            
            // text = "<li>" + jsonObj[i].images + "</li>";
            // document.getElementById("getList").innerHTML += text;
            
        }
    
    
    var myJSON ="";
    var localStorage ="";


  document.getElementById("wholeContent").innerHTML=wholeContent;
  
}