//Namespacemenu
ip = '15.206.153.230'
addr = "http://"+ip+"/cgi-bin/k8s.py?x="
function namespacemenu(){
    document.getElementById("d1").innerHTML = '<ul><li id="cp" onclick="createns();"><a href="#">Create NameSpace</a></li></ul>'
    document.getElementById("d2").innerHTML = '<ul><li id="cp" onclick="deletens();" ><a href="#">Delete NameSpace</a></li></ul>'
     document.getElementById("d3").innerHTML = '<ul><li id="cp" onclick="listns();" ><a href="#">List NameSpace</a></li></ul>'
     document.getElementById("d5").innerHTML = '<ul><li id="cp" onclick="describens();" ><a href="#">Describe NameSpace</a></li></ul>'
     document.getElementById("d6").innerHTML = '<ul><li id="cp" onclick="describenamespaces();" ><a href="#">Describe All NameSpaces</a></li></ul>'
	document.getElementById("d4").innerHTML = ''
}

function createns(){
    document.getElementById("d1").innerHTML = '<input id="I1" placeholder="Enter namespace name"/>'
    document.getElementById("d2").innerHTML = '<button id="b1" onclick="cns();">Create</button>'
    document.getElementById("d3").innerHTML = ''
    document.getElementById("d5").innerHTML = ''
    document.getElementById("d6").innerHTML = ''
}

function deletens(){
    document.getElementById("d1").innerHTML = '<input id="I1" placeholder="Enter namespace name"/>'
    document.getElementById("d2").innerHTML = '<button id="b1" onclick="dns();">Delete</button>'
    document.getElementById("d5").innerHTML = ''
    document.getElementById("d3").innerHTML = ''
    document.getElementById("d6").innerHTML = ''
}

function describens(){
    document.getElementById("d1").innerHTML = '<input id="I1" placeholder="Enter namespace name"/>'
    document.getElementById("d2").innerHTML = '<button id="b1" onclick="desns();">Describe</button>'
    document.getElementById("d5").innerHTML = ''
    document.getElementById("d3").innerHTML = ''
    document.getElementById("d6").innerHTML = ''
}


function cns(){
    var nsname = document.getElementById("I1").value
    var cmd = "sudo kubectl create ns " + nsname
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

function dns(){
    var nsname = document.getElementById("I1").value
    var cmd = "sudo kubectl delete ns " + nsname
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

function listns(){
    var cmd = "sudo kubectl get ns"
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

function describenamespaces(){
    var cmd = "sudo kubectl describe ns"
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


function desns(){
    var nsname = document.getElementById("I1").value
    var cmd = "sudo kubectl describe ns " + nsname
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

