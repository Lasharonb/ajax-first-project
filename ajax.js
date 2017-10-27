
document.getElementById("loadbutton").addEventListener("click", ajaxcall);

function ajaxcall(){
   
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "https://assets.breatheco.de/json/project_list.php", true);
    ajax.addEventListener("load", ajaxArrives);
    ajax.send();
    

}

function ajaxArrives(event){
    
    var jsonObj = JSON.parse(event.target.response);
    
    console.log(jsonObj);
    
    
        function myList(JSON) {
            var a = "<ul>",
                b = "</ul>",
                c = [];
            
    for (var i = 0; i < JSON.length; i++) {
         document.innerHTML( i + "---" + JSON[i].name );  
    }
            
 }
}


