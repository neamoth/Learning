from os import replace


with open('slang.txt', 'w') as f:
    f.write('''
    honkey monkey donkey , 
    i love so many donkey ,
    donkey die mother cry  die..
    ''')

with open('slang.txt', 'r') as f:
    read = f.read()
    print(f'''The file is:
    {read}''')

with open('slang.txt', 'w ') as f:
    f.write(read.replace('donkey', '*******'))

with open('slang.txt', 'r') as f:
    readagain = f.read()
    print(f'''After hiding the slang word:
    {readagain}''')