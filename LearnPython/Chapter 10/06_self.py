class Employee:
    company = "Google"
    def getSalary(self):
        print(f"salary is {self.salary}")
neamoth = Employee()
neamoth.salary = 100000
neamoth.getSalary()