def greater(a,b,c):
    if(a>b):
        if(a>c):
            return a
        else:
            return c 
    else: 
        if(b>c):
            return b
        else: 
            return c
greater = greater(5,6,8)
print(greater)