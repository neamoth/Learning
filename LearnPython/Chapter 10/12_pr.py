class Calculator:
    
    def __init__(self, number):
        self.number = number
    
    def square(self):
        print(f"The square of {self.number} is {self.number ** 2}")
    
    def squareRoot(self):
        print(f"The square of {self.number} is {self.number ** 0.5}")
    
    def cube(self):
        print(f"The square of {self.number} is {self.number ** 3}")
        
a = Calculator(int(input("Enter a number: ")))
a.square()
a.squareRoot()
a.cube()