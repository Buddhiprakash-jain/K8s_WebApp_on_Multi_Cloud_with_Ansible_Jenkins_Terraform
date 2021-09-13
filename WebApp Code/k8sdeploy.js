//DeploymentsMenu
ip = '15.206.153.230'
addr = "http://"+ip+"/cgi-bin/k8s.py?x="
function deploymenu(){
    document.getElementById("d1").innerHTML = '<ul><li id="cp" onclick="createdeploy();"><a href="#">Create Deployment</a></li></ul>'
    document.getElementById("d2").innerHTML = '<ul><li id="cp" onclick="deletedeploy();" ><a href="#">Delete Deployment</a></li></ul>'
     document.getElementById("d3").innerHTML = '<ul><li id="cp" onclick="listdeploy();" ><a href="#">List Deployments</a></li></ul>'
     document.getElementById("d5").innerHTML = '<ul><li id="cp" onclick="describedeploy();" ><a href="#">Describe Deployment</a></li></ul>'
     document.getElementById("d6").innerHTML = '<ul><li id="cp" onclick="describedeployments();" ><a href="#">Describe All Deployments</a></li></ul>'
	document.getElementById("d4").innerHTML = ''
}

function createdeploy(){
    document.getElementById("d1").innerHTML = '<input id="I1" placeholder="Enter deployment name"/>'
    document.getElementById("d2").innerHTML = '<input id="I2" placeholder="Enter image name"/>'
    document.getElementById("d3").innerHTML = '<button id="b1" onclick="cdeploy();">Create</button>'
    document.getElementById("d5").innerHTML = ''
    document.getElementById("d6").innerHTML = ''
}

function deletedeploy(){
    document.getElementById("d1").innerHTML = '<input id="I1" placeholder="Enter deployment name"/>'
    document.getElementById("d2").innerHTML = '<button id="b1" onclick="ddeploy();">Delete</button>'
    document.getElementById("d5").innerHTML = ''
    document.getElementById("d3").innerHTML = ''
    document.getElementById("d6").innerHTML = ''
}

function describedeploy(){
    document.getElementById("d1").innerHTML = '<input id="I1" placeholder="Enter deployment name"/>'
    document.getElementById("d2").innerHTML = '<button id="b1" onclick="desdeploy();">Describe</button>'
    document.getElementById("d5").innerHTML = ''
    document.getElementById("d3").innerHTML = ''
    document.getElementById("d6").innerHTML = ''
}


function cdeploy(){
    var deployname = document.getElementById("I1").value
    var imagename = document.getElementById("I2").value
    var cmd = "sudo kubectl create deploy " + deployname + " --image=" + imagename
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

function ddeploy(){
    var deployname = document.getElementById("I1").value
    var cmd = "sudo kubectl delete deploy " + deployname
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

function listdeploy(){
    var cmd = "sudo kubectl get deploy"
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

function describedeployments(){
    var cmd = "sudo kubectl describe deploy"
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


function desdeploy(){
    var deployname = document.getElementById("I1").value
    var cmd = "sudo kubectl describe deploy " + deployname
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



