subs1 = int(input("Enter subject 1 marks: "))
subs2 = int(input("Enter subject 2 marks: "))
subs3 = int(input("Enter subject 3 marks: "))
total =(subs1+subs2+subs3)/3

if(total<40):
    print("Sorry! You are failed because your total percentage is less than 40")
elif(subs1<33 or subs2<33 or subs3<33):
    print("Sorry! You failed because of you have less than 33%")
else:
    print("Congratulation! You passed the exam")