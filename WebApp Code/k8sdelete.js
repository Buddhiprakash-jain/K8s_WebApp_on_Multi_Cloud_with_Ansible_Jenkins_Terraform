//Replicamenu
//Delete entire Environment
ip = '15.206.153.230'
addr = "http://"+ip+"/cgi-bin/k8s.py?x="
function k8sdelete(){
    document.getElementById("d1").innerHTML = '<ul><li id="cp"><a href="#">Delete Entire Environment??</a></li></ul>'
     document.getElementById("d3").innerHTML = '<button id="b1" onclick="delyes();">Yes</button>'
     document.getElementById("d5").innerHTML = '<button id="b1" onclick="delno();">No</button>'
    document.getElementById("d4").innerHTML = ''
}


function delyes(){
    var cmd = "sudo kubectl delete all --all"
    var xhr = new XMLHttpRequest();
    xhr.open("GET", addr+ cmd , true);
    xhr.send();
    xhr.onload = function (){
      var output = xhr.responseText;        
              document.getElementById("d4").innerHTML = output;
	      document.getElementById("d1").innerHTML = "";
              document.getElementById("d3").innerHTML = "";
	      document.getElementById("d5").innerHTML = "";
	   
    }
}

function delno(){
              document.getElementById("d4").innerHTML = 
	      document.getElementById("d1").innerHTML = "";
              document.getElementById("d2").innerHTML = "";
              document.getElementById("d3").innerHTML = "";
	      document.getElementById("d5").innerHTML = "";
	      document.getElementById("d6").innerHTML = '';
}



