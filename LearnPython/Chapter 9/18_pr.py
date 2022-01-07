with open('this.txt') as f:
    read = f.read()
with open('copy.txt', 'w') as f:
    f.write(read)
with open('copy.txt') as f:
    content = f.read()
    print(content)