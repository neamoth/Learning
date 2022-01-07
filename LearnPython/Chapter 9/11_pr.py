with open('twinkle.txt', 'w') as file:
    file.write('''
Twinkle, twinkle, little star,
How I wonder what you are!
Up above the world so high,
Like a diamond in the sky.
    ''')

with open('twinkle.txt', 'r') as file:
    t = file.read()
    if("twinkle" in t):
        print("Twinkle in the poem")
    else: 
        print("Twinkle not in the poems")