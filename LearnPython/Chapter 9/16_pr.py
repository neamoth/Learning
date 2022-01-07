with open('pythonline.txt', 'w') as f:
    f.write('''This is a python program find task.
    which is by
    python coding''')
with open('python.txt', 'r') as f:
    read = f.read().lower()
    if 'python' in read:
        print("yes python is here")
    else: 
        print("python is not here")

