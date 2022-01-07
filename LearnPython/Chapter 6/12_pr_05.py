list = ["neamoth", "sakib", "samiul", "tani", "nahid", "ruhi"]

findname = input("Enter a name for fingout: ")

if(findname in list):
    print(f"{findname} is in the list")
else:
    print(f"{findname} is not in the list")