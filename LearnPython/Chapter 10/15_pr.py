class Train:
    def __init__(self, name, fare , seats):
        self.name = name 
        self.fare = fare
        self.seats = seats
    def getStatus(self):
        print(f'''
Train Name    : {self.name}
Seats Avaiable: {self.seats}
''')
    def getFareInfo(self):
        print(f"Ticket Price : {self.fare}")
    def bookTicket(self):
        if(self.seats>0):
            print("Your ticket has been booked!")
            self.seats = self.seats - 1
        else: 
            print("this train is booked! Kindly try in next train")   
    def cancelTicket(self):
        self.seats = self.seats+1
intercity = Train("Intercity Express", 300, 5)
intercity.getStatus()
intercity.getFareInfo()
intercity.bookTicket()
intercity.bookTicket()
intercity.cancelTicket()
intercity.bookTicket()

intercity.getStatus()