def natural_number(n):
    if(n == 1 or n == 0):
        return n
    return natural_number(n-1) + n

n = int(input("Enter a number: "))
sum = natural_number(n)
print(sum)