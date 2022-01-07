import datetime

name = input("Enter your name:")
date1 = datetime.date.today()#.strftime('%d-%m')

letter = f'''Dear {name}
You are selected!
{date1}
'''

print(letter)