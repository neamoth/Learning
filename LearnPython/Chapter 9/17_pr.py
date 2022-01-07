content = True
i = 1
with open('pythonline.txt', 'r') as f:
    while content:

            content = f.readline()
            if 'python' in content.lower():
                print(f"yes it present in line {i}")
            i+=1