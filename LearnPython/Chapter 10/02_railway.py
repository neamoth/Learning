class RailwayForm():
    formType = "RailwayForm"
    def printData(self):
        print(f"Name is {self.name}")
        print(f"Train is {self.train}")

neamothApplication = RailwayForm()
neamothApplication.name = "Neamoth"
neamothApplication.train = "Tulunanishita"
neamothApplication.printData()