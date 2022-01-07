username = input("Enter your username: ")
username_len = len(username)

if(username_len<10):
    print("This username is less than 10 character")
else:
    print("This username is greater than 10 character ")