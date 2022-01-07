list1 = [1,2,3,6,4,3,6,7,5,3,5,7,3,21]
print(f'''This is the main list element:
{list1}''')

# Sorting the list in-order
list1.sort()
print("Value after using sort",list1)

# Reversing the list End to start

list1.reverse()
print("Value after using reverse",list1)

#Append or adding elements on list:
list1.reverse() #this is optional
list1.append("Neamoth")
print("Value after adding a element, ", list1)

# Insering list elements:

list1.insert(3, 6)
print(f"After adding 6 in index(3), {list1} ")

# Deleting or pop elements:

list1.pop(2) #Will delete element of index 2 and return its value
print("The 3rd element or index(2) will be deleted, ",list1)

# Remove a number from a list:

# list1.remove(21)
# print(f"1 will be deleted or removed from the list now, {list1.remove}")