//Podsmenu
ip = '15.206.153.230'
addr = "http://"+ip+"/cgi-bin/k8s.py?x="
function podmenu(){
    document.getElementById("d1").innerHTML = '<ul><li id="cp" onclick="createpod();"><a href="#">Create Pod</a></li></ul>'
    document.getElementById("d2").innerHTML = '<ul><li id="cp" onclick="deletepod();" ><a href="#">Delete Pod</a></li></ul>'
     document.getElementById("d3").innerHTML = '<ul><li id="cp" onclick="listpod();" ><a href="#">List Pods</a></li></ul>'
     document.getElementById("d5").innerHTML = '<ul><li id="cp" onclick="describepod();" ><a href="#">Describe Pod</a></li></ul>'
     document.getElementById("d6").innerHTML = '<ul><li id="cp" onclick="describepods();" ><a href="#">Describe All Pods</a></li></ul>'
	document.getElementById("d4").innerHTML = ''
}

function createpod(){
    document.getElementById("d1").innerHTML = '<input id="I1" placeholder="Enter pod name"/>'
    document.getElementById("d2").innerHTML = '<input id="I2" placeholder="Enter image name"/>'
    document.getElementById("d3").innerHTML = '<button id="b1" onclick="cpod();">Create</button>'
    document.getElementById("d5").innerHTML = ''
    document.getElementById("d6").innerHTML = ''
}

function deletepod(){
    document.getElementById("d1").innerHTML = '<input id="I1" placeholder="Enter pod name"/>'
    document.getElementById("d2").innerHTML = '<button id="b1" onclick="dpod();">Delete</button>'
    document.getElementById("d5").innerHTML = ''
    document.getElementById("d3").innerHTML = ''
    document.getElementById("d6").innerHTML = ''
}

function describepod(){
    document.getElementById("d1").innerHTML = '<input id="I1" placeholder="Enter pod name"/>'
    document.getElementById("d2").innerHTML = '<button id="b1" onclick="despod();">Describe</button>'
    document.getElementById("d5").innerHTML = ''
    document.getElementById("d3").innerHTML = ''
    document.getElementById("d6").innerHTML = ''
}


function cpod(){
    var podname = document.getElementById("I1").value
    var imagename = document.getElementById("I2").value
    var cmd = "sudo kubectl run " + podname + " --image=" + imagename
    var xhr = new XMLHttpRequest();
    xhr.open("GET", addr+ cmd , true);
    xhr.send();
    xhr.onload = function (){
      var output = xhr.responseText;        
              document.getElementById("d4").innerHTML = output;
	      document.getElementById("d1").innerHTML = "";
              document.getElementById("d2").innerHTML = "";
              document.getElementById("d3").innerHTML = "";
	      document.getElementById("d5").innerHTML = "";
	      document.getElementById("d6").innerHTML = '';
    }
}

function dpod(){
    var podname = document.getElementById("I1").value
    var cmd = "sudo kubectl delete pod " + podname
    var xhr = new XMLHttpRequest();
    xhr.open("GET", addr+ cmd , true);
    xhr.send();
    xhr.onload = function (){
      var output = xhr.responseText;
              document.getElementById("d4").innerHTML = output;
              document.getElementById("d1").innerHTML = "";
	      document.getElementById("d2").innerHTML = "";
	      document.getElementById("d3").innerHTML = "";
              document.getElementById("d5").innerHTML = "";
	      document.getElementById("d6").innerHTML = '';
    }
}

function listpod(){
    var cmd = "sudo kubectl get pods"
    var xhr = new XMLHttpRequest();
    xhr.open("GET", addr+ cmd , true);
    xhr.send();
    xhr.onload = function (){
      var output = xhr.responseText;
              document.getElementById("d4").innerHTML = output;
              document.getElementById("d2").innerHTML = "";
	      document.getElementById("d3").innerHTML = "";
	      document.getElementById("d1").innerHTML = "";
              document.getElementById("d5").innerHTML = "";
	      document.getElementById("d6").innerHTML = '';
    }
}

function describepods(){
    var cmd = "sudo kubectl describe pods"
    var xhr = new XMLHttpRequest();
    xhr.open("GET", addr+ cmd , true);
    xhr.send();
    xhr.onload = function (){
      var output = xhr.responseText;
              document.getElementById("d4").innerHTML = output;
              document.getElementById("d2").innerHTML = "";
              document.getElementById("d3").innerHTML = "";
              document.getElementById("d1").innerHTML = "";
              document.getElementById("d5").innerHTML = "";
              document.getElementById("d6").innerHTML = ''
	}
}


function despod(){
    var podname = document.getElementById("I1").value
    var cmd = "sudo kubectl describe pod " + podname
    var xhr = new XMLHttpRequest();
    xhr.open("GET", addr+ cmd , true);
    xhr.send();
    xhr.onload = function (){
      var output = xhr.responseText;
              document.getElementById("d4").innerHTML = output;
              document.getElementById("d1").innerHTML = "";
              document.getElementById("d2").innerHTML = "";
              document.getElementById("d3").innerHTML = "";
              document.getElementById("d5").innerHTML = "";
              document.getElementById("d6").innerHTML = '';
    }

}

