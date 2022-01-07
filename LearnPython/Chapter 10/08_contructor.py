class Employee:
    def __init__(self, name, salary, number):
        self.name = name
        self.salary = salary
        self.number = number
    def printDetails(self):
        print(f'''
Name  : {self.name}
salary: {self.salary}Tk
Phone : +88{self.number}
              ''')
neamoth = Employee("neamoth", 1000000, "01789400417")
neamoth.printDetails()