class Programmer:
    company = "Microsoft"
    def __init__(self, name, product):
        self.name = name
        self.product= product
    
    def printDetails(self):
        print(f'''
Company: {self.company}
Name   : {self.name}
product: {self.product}
              ''')
        
neamoth = Programmer("Neamoth", "Bdjobs.com")
sakib = Programmer("Sakib", "Design99.com")
rakib = Programmer("Rakib", "GitHub.io")
rakib.company = "GitHub"
neamoth.printDetails()
sakib.printDetails()
rakib.printDetails()
