number = int(input("Enter a number: "))
prime = True

for i in range(2, number):
    if(number%i == 0):
        prime = False

if prime:
    print("This number is prime")
else:
    print("This number is not prime")