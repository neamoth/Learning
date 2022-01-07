str1 = "This is a  good programming  language string in  the life of pie and i am  a good programmer ok bye now  tata!"
count_space = str1.count(" ")
count_doublespace = str1.count("  ")
replace_double_space = str1.replace("  ", " ")

print(f'''The total number of space are {count_space},
The total number of Double Space are {count_doublespace} and
The after replacing the double space into the single space. The string is: 
{replace_double_space}''')