import random
f=open("dataall.csv","r")
data = f.read()
g=open("datatypes.js","w")
d = data.splitlines()
for i in range(len(d)):
    d[i] = d[i].split(',')
g.write("var typedata = [")
for i in range(88888):
    g.write("{lat:"+d[i][1]+",long:"+d[i][2]+",type:'"+d[i][3]+"'}")
    g.write(",\n")
g.write("]")
g.close()
f.close()
