from os import read


with open('python.txt', 'w') as f:
    f.write("This is a python program find task.")
with open('python.txt', 'r') as f:
    read = f.read()
    search = read.find('python')
    print(search)