marks1 = int(input("Enter your masks student 1: "))
marks2 = int(input("Enter your masks student 2: "))
marks3 = int(input("Enter your masks student 3: "))
marks4 = int(input("Enter your masks student 4: "))
marks5 = int(input("Enter your masks student 5: "))
marks6 = int(input("Enter your masks student 6: "))

markShit = [marks1, marks2, marks3, marks4, marks5, marks6]

markShit.sort()
print(f'''The marks of the students are in sorted list:
{markShit}''')