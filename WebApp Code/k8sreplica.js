//Replicamenu
ip = '15.206.153.230'
addr = "http://"+ip+"/cgi-bin/k8s.py?x="
function replicamenu(){
    document.getElementById("d1").innerHTML = '<ul><li id="cp" onclick="scaleup();"><a href="#">ScaleUp</a></li></ul>'
    document.getElementById("d2").innerHTML = '<ul><li id="cp" onclick="scaledown();" ><a href="#">ScaleDown</a></li></ul>'
     document.getElementById("d3").innerHTML = '<ul><li id="cp" onclick="listreplica();" ><a href="#">List Replica Set</a></li></ul>'
     document.getElementById("d6").innerHTML = '<ul><li id="cp" onclick="describereplicas();" ><a href="#">Describe All Replica Sets</a></li></ul>'
	document.getElementById("d4").innerHTML = ''
}

function scaleup(){
    document.getElementById("d1").innerHTML = '<input id="I1" placeholder="Enter deployment name"/>'
    document.getElementById("d2").innerHTML = '<input id="I2" placeholder="Enter replica number"/>'
    document.getElementById("d3").innerHTML = '<button id="b1" onclick="replicaup();">Scaleup</button>'
    document.getElementById("d5").innerHTML = ''
    document.getElementById("d6").innerHTML = ''
}

function scaledown(){
    document.getElementById("d1").innerHTML = '<input id="I1" placeholder="Enter deployment name"/>'
     document.getElementById("d2").innerHTML = '<input id="I2" placeholder="Enter replica number"/>'
    document.getElementById("d3").innerHTML = '<button id="b1" onclick="replicadown();">Scaledown</button>'
    document.getElementById("d5").innerHTML = ''
    document.getElementById("d6").innerHTML = ''
}

function replicaup(){
    var deployname = document.getElementById("I1").value
    var replicanum = document.getElementById("I2").value
    var cmd = "sudo kubectl scale deploy " + deployname + " --replicas=" + replicanum
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

function replicadown(){
    var deployname = document.getElementById("I1").value
    var replicanum = document.getElementById("I2").value
    var cmd = "sudo kubectl scale deploy " + deployname + " --replicas=" + replicanum
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

function listreplica(){
    var cmd = "sudo kubectl get rs"
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

function describereplicas(){
    var cmd = "sudo kubectl describe rs"
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

