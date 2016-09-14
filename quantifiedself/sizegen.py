f = open("calldurations.txt","r")
each_line_total = []
for i in f:
    each_line_total.append(sum([int(j) for j in i.split(' ')]))
for j in each_line_total:
    print j
