def factorial_recursive(n):
    if(n == 1 or n == 0):
        return 1
    return n * factorial_recursive(n-1)
n = int(input("Enter a number: "))
f = factorial_recursive(n)
print(f"Factorial of {n} is, {f}")