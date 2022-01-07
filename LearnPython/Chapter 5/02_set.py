#adding elements in an empty set:
s = {"neamoth", "sakib", "nahid", "rakib"}
print(f"This is the set {s}\nThis is the type {type(s)}")
s.add("harry")
print("This will add 'harry in the set'",s)

# remmoving item from a set:
s.remove("sakib")
print(f'''This will remove sakib from the set
{s}''')

# Finding the length of the set
print(f"The set length is, {len(s)}")

# Clearing the set
s.clear()
print(f"This will clear the set elements from set, {s}")