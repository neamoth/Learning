n = int(input("Enter the value of N: "))

# Checking the number odd or even
even = False
odd = False
if (n%2) == 0:
    even = True
else:
    odd = True

if (odd):
    print("Weird")
elif ((even) and (n>=2 and n<=5)):
    print("Not Weird")
elif ((even) and (n>=6 and n<=20)):
    print("Weird")
elif ((even) and (n>20)):
    print("Not Weird")
else:
    print("Invalid input")