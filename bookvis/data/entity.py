import nltk, re

extra_tags = ['``', ',', "''", '$', ')', '(', 'POS', '.', 'LS', ':', 'CD', '--', 'SYM']

f = open("p_and_p.txt", "r")
g = open("draft_data_1.json", "w")

document = f.read()
f.close()

document = [x.replace('\r\n',' ') for x in re.split('\r\n\r\n',document) if x.replace('\r\n',' ')!='']

#g.close()

paragraphs = []
data = []

for i in document:
    paragraphs.append(nltk.sent_tokenize(i))

#sentences = nltk.sent_tokenize(document)

def check_underscore(somestr):
    return somestr.startswith('_') and somestr.endswith('_')

def findnames():
    flag = 0
    chapternum = 0
    paranum = 0
    #sentnum = 0
    for paragraph in paragraphs:
        if(re.search("Chapter \d", str(paragraph))!= None):
            chapternum +=1
            print "working on chapter "+ str(chapternum)
            paranum = 0
            #sentnum = 0
            data.append({"chapter": chapternum, "paragraphs": []})
        else:
            paranum +=1
            #sentnum = 0
            data[chapternum-1]["paragraphs"].append({"paragraph": paranum, "original": ' '.join([str(x) for x in paragraph]), "entities": []})
            for sentence in paragraph:
                #sentnum +=1
                tokens = nltk.word_tokenize(sentence)
                tags = nltk.pos_tag(tokens)
                chunks = nltk.ne_chunk(tags)
                for a in chunks:
                    if(type(a[0])!=str):
                        name_acc = ''
                        for part in a:
                            if(check_underscore(part[0])):
                                flag = 1
                            else:
                                name_acc += (part[0]+" ")
                        if(flag!=1):
                            name_acc = name_acc.rstrip()
                            data[chapternum-1]["paragraphs"][paranum-1]["entities"].append({"word": name_acc, "type": 'NE'})
                        else:
                            flag = 0
                            data[chapternum-1]["paragraphs"][paranum-1]["entities"].append({"word": part[0].strip('_'), "font": "i"})
                            
                    else:
                        if(a[1]=='NNP'):
                            if(check_underscore(a[0])):
                                data[chapternum-1]["paragraphs"][paranum-1]["entities"].append({"word": a[0].strip('_'), "font": "i"})
                            else:
                                data[chapternum-1]["paragraphs"][paranum-1]["entities"].append({"word": a[0], "type": 'NE'})
                        elif(a[1] in extra_tags):
                            if((a[0]=="''") or (a[0]=='``')):
                                data[chapternum-1]["paragraphs"][paranum-1]["entities"].append({"word": '"', "type": 'x'})
                            else:    
                                data[chapternum-1]["paragraphs"][paranum-1]["entities"].append({"word": a[0], "type": 'x'})
                        else:
                            if(check_underscore(a[0])):
                                data[chapternum-1]["paragraphs"][paranum-1]["entities"].append({"word": a[0].strip('_'), "font": "i"})
                            else:
                                data[chapternum-1]["paragraphs"][paranum-1]["entities"].append({"word": a[0]})


findnames()
g.write(str(data))
g.close()
