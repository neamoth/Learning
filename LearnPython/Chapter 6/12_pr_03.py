from typing import Tuple


text = input("Enter your comment: ")

if("make a lot of money" in text):
    spam = True
elif("buy now" in text):
    spam = True
elif("click this" in text):
    spam = True
elif("subscribe now" in text):
    spam = True
else:
    spam = False


if(spam):
    print("This is a spam!")
else:
    print("This is not a spam!")