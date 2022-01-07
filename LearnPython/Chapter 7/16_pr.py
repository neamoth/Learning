from types import prepare_class


number = int(input("Enter a number: "))
factorial = 1
for i in range(1, number):
    factorial = factorial * i 
print(f"The factorial of {number} is {factorial}")