def star(n):
    for i in range(n):
        print("*" * (n-i))

n = int(input("Enter a number: "))
star = star(n)
print(star)