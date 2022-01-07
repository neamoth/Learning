n = int(input("Enter value of N: "))

for i in range(0, n+1):
    for j in range(i):
        print("*", end="")
    print("\r")