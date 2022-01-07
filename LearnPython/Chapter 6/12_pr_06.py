number = int(input("Enter your number for findout your greade: "))

ex = (number in range(90, 100))
a = (number in range(80, 90))
b = (number in range(70, 80))
c = (number in range(60, 70))
d = (number in range(50, 60))
f = (number<50)

if ex:
    print("Ex")
elif a:
    print("A")
elif b:
    print("B")
elif c:
    print("C")
elif d:
    print("D")
elif f:
    print("F")
else:
    print("Not Valid")