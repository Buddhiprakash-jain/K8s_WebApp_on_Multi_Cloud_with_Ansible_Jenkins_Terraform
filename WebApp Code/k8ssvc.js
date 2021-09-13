//service menu
ip = '15.206.153.230'
addr = "http://"+ip+"/cgi-bin/k8s.py?x="
function servicemenu(){
    document.getElementById("d1").innerHTML = '<ul><li id="cp" onclick="exposesvc();"><a href="#">Expose Service</a></li></ul>'
    document.getElementById("d2").innerHTML = '<ul><li id="cp" onclick="deletesvc();" ><a href="#">Delete Service</a></li></ul>'
     document.getElementById("d3").innerHTML = '<ul><li id="cp" onclick="listsvc();" ><a href="#">List Service</a></li></ul>'
     document.getElementById("d5").innerHTML = '<ul><li id="cp" onclick="describesvc();" ><a href="#">Describe service</a></li></ul>'
     document.getElementById("d6").innerHTML = '<ul><li id="cp" onclick="describeservices();" ><a href="#">Describe All Services</a></li></ul>'
	document.getElementById("d4").innerHTML = ''
}

function exposesvc(){
    document.getElementById("d1").innerHTML = '<input id="I1" placeholder="Enter Deployment name"/>'
    document.getElementById("d2").innerHTML = '<input id="I2" placeholder="Enter Port number to be exposed"/>'
    document.getElementById("d3").innerHTML = '<input id="I3" placeholder="Enter LoadBalancer type"/>'
    document.getElementById("d5").innerHTML = '<button id="b1" onclick="csvc();">Expose</button>'
    document.getElementById("d6").innerHTML = ''
}

function deletesvc(){
    document.getElementById("d1").innerHTML = '<input id="I1" placeholder="Enter service name"/>'
    document.getElementById("d2").innerHTML = '<button id="b1" onclick="dsvc();">Delete</button>'
    document.getElementById("d5").innerHTML = ''
    document.getElementById("d3").innerHTML = ''
    document.getElementById("d6").innerHTML = ''
}

function describesvc(){
    document.getElementById("d1").innerHTML = '<input id="I1" placeholder="Enter service name"/>'
    document.getElementById("d2").innerHTML = '<button id="b1" onclick="dessvc();">Describe</button>'
    document.getElementById("d5").innerHTML = ''
    document.getElementById("d3").innerHTML = ''
    document.getElementById("d6").innerHTML = ''
}


function csvc(){
    var deployname = document.getElementById("I1").value
    var portnum = document.getElementById("I2").value
    var lbtype = document.getElementById("I3").value
    var cmd = "sudo kubectl expose deploy " + deployname + " --port=" + portnum + " --type=" + lbtype
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

function dsvc(){
    var svcname = document.getElementById("I1").value
    var cmd = "sudo kubectl delete svc " + svcname
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

function listsvc(){
    var cmd = "sudo kubectl get svc"
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

function describeservices(){
    var cmd = "sudo kubectl describe svc"
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


function dessvc(){
    var svcname = document.getElementById("I1").value
    var cmd = "sudo kubectl describe svc " + svcname
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

