f = open('sample.txt', 'r')
#read 1st line
data = f.readline()
print(data)
#read 2nd line 
data = f.readline()
print(data)
#read 3rd line
data = f.readline()
print(data)
#and we can read more line by calling again and again
f.close()
