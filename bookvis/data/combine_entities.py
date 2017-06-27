import re, json

f = open("draft_data_1.json", "r")
g = open("combined_entity_1.js", "w")
h = open("nrc_emotion_lexicon.json", "r")

document = eval(f.read())
lexicon = eval(h.read())

f.close()
h.close()

data = []
name_acc = ""

chapternum = 0
paranum = 0
for chapter in document:
    chapternum +=1
    paranum = 0
    data.append({"chapter": chapternum, "paragraphs": []})
    for paragraph in chapter['paragraphs']:
        paranum +=1
        letter_count = 0
        data[chapternum-1]["paragraphs"].append({"paragraph": paranum, "entities": []})
        for i in range(len(paragraph['entities'])-1):
            if(('type' in paragraph['entities'][i]) and ('type' in paragraph['entities'][i+1]) and (paragraph['entities'][i]['type']=='NE') and (paragraph['entities'][i+1]['type']=='NE')):
                    name_acc += (" " + paragraph['entities'][i]['word'])
            elif(('type' in paragraph['entities'][i]) and (paragraph['entities'][i]['type']=='NE')):
                    name_acc += (" " + paragraph['entities'][i]['word'])
                    if(paragraph['original'].strip()[letter_count:letter_count+len(name_acc.strip())+1]==(name_acc.strip()+' ')):
                       data[chapternum-1]["paragraphs"][paranum-1]["entities"].append({"word": name_acc.strip(), "type": 'NE', "space": 1})
                       letter_count += (len(name_acc.strip())+1)
                    else:
                       data[chapternum-1]["paragraphs"][paranum-1]["entities"].append({"word": name_acc.strip(), "type": 'NE'})
                       letter_count += len(name_acc.strip())
                    name_acc = ""
            else:
                if('type' in paragraph['entities'][i]):
                    if('font' in paragraph['entities'][i]):
                        if(paragraph['original'].strip()[letter_count:letter_count+len(paragraph['entities'][i]['word'])+3]==('_'+paragraph['entities'][i]['word']+'_ ')):
                            paragraph['entities'][i]['space'] = 1
                            letter_count += (len(paragraph['entities'][i]['word'])+3)
                        else:
                            letter_count += (len(paragraph['entities'][i]['word'])+2)
                    else:
                        if(paragraph['original'].strip()[letter_count:letter_count+len(paragraph['entities'][i]['word'])+1]==(paragraph['entities'][i]['word']+' ')):
                            paragraph['entities'][i]['space'] = 1
                            letter_count += (len(paragraph['entities'][i]['word'])+1)
                        else:
                            letter_count += len(paragraph['entities'][i]['word'])
                    data[chapternum-1]["paragraphs"][paranum-1]["entities"].append(paragraph['entities'][i])
                else:
                    if('font' in paragraph['entities'][i]):
                        if(paragraph['original'].strip()[letter_count:letter_count+len(paragraph['entities'][i]['word'])+3]==('_'+paragraph['entities'][i]['word']+'_ ')):
                            if(paragraph['entities'][i]['word'] in lexicon):
                                if(lexicon[paragraph['entities'][i]['word']]!='0000000000'):
                                    data[chapternum-1]["paragraphs"][paranum-1]["entities"].append({"word": paragraph['entities'][i]['word'], "emotion": lexicon[paragraph['entities'][i]['word']], "space": 1, "font": "i"})
                                else:
                                    data[chapternum-1]["paragraphs"][paranum-1]["entities"].append({"word": paragraph['entities'][i]['word'], "space": 1, "font": "i"})
                            else:
                                data[chapternum-1]["paragraphs"][paranum-1]["entities"].append({"word": paragraph['entities'][i]['word'], "space": 1, "font": "i"})
                            letter_count += (len(paragraph['entities'][i]['word'])+3)
                        else:
                            if(paragraph['entities'][i]['word'] in lexicon):
                                if(lexicon[paragraph['entities'][i]['word']]!='0000000000'):
                                    data[chapternum-1]["paragraphs"][paranum-1]["entities"].append({"word": paragraph['entities'][i]['word'], "emotion": lexicon[paragraph['entities'][i]['word']], "font": "i"})
                                else:
                                    data[chapternum-1]["paragraphs"][paranum-1]["entities"].append({"word": paragraph['entities'][i]['word'], "font": "i"})                                                                    
                            else:
                                data[chapternum-1]["paragraphs"][paranum-1]["entities"].append({"word": paragraph['entities'][i]['word'], "font": "i"})
                            letter_count += (len(paragraph['entities'][i]['word'])+2)
                    else:
                        if(paragraph['original'].strip()[letter_count:letter_count+len(paragraph['entities'][i]['word'])+1]==(paragraph['entities'][i]['word']+' ')):
                            if(paragraph['entities'][i]['word'] in lexicon):
                                if(lexicon[paragraph['entities'][i]['word']]!='0000000000'):
                                    data[chapternum-1]["paragraphs"][paranum-1]["entities"].append({"word": paragraph['entities'][i]['word'], "emotion": lexicon[paragraph['entities'][i]['word']], "space": 1})
                                else:
                                    data[chapternum-1]["paragraphs"][paranum-1]["entities"].append({"word": paragraph['entities'][i]['word'], "space": 1})
                            else:
                                data[chapternum-1]["paragraphs"][paranum-1]["entities"].append({"word": paragraph['entities'][i]['word'], "space": 1})
                            letter_count += (len(paragraph['entities'][i]['word'])+1)
                        else:
                            if(paragraph['entities'][i]['word'] in lexicon):
                                if(lexicon[paragraph['entities'][i]['word']]!='0000000000'):
                                    data[chapternum-1]["paragraphs"][paranum-1]["entities"].append({"word": paragraph['entities'][i]['word'], "emotion": lexicon[paragraph['entities'][i]['word']]})
                                else:
                                    data[chapternum-1]["paragraphs"][paranum-1]["entities"].append({"word": paragraph['entities'][i]['word']})                                    
                            else:
                                data[chapternum-1]["paragraphs"][paranum-1]["entities"].append({"word": paragraph['entities'][i]['word']})
                            letter_count += len(paragraph['entities'][i]['word'])
        data[chapternum-1]["paragraphs"][paranum-1]["entities"].append(paragraph['entities'][-1])
                                                                       
g.write('var text_data = ' + str(data))
g.close()
