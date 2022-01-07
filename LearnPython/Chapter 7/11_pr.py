number = int(input("Enter a number for multipication: "))

for i in range(1, 10+1):
    result = i*number
    print(f"{number}X{i}={result}")
    i+=1