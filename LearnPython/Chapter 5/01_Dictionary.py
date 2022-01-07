myDict1 = {
    "Neamoth" : "Coder",
    "Sakib" : "Designer",
    "Salary" : 120000,
    "Eating" : ['Rice', 'Meat', 'water'],
    "AnotherDict" : {"New": "Salam"}
}

print("The value is ", myDict1["Neamoth"])
#Nasted dictionary:
print("This is a Nasted dictionary value, ",myDict1['AnotherDict']['New']) #We can use Dictionary into another dictionary
#This kind of dictionary called nasted dictionary.

#Printing the item in dictionary:
print(myDict1.items())

#updating a value in a dictionary:
print(myDict1.update({"Friday" : "Jummah"}))
print("After updaing the dictionary\n" , myDict1)

#Getting name:
print(myDict1.get("Neamoth"))