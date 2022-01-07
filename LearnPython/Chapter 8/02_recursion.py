def factorial_iter(n):
    product = 1
    for i in range(n):
        product = product * (i+1)
    return product
n = int(input("Enter a number: "))
f = factorial_iter(n)
print(f)