def remove_and_strip(string, word):
    newstr = string.replace(word, "")
    return newstr.strip()

comment = "        This is a string        "
new = remove_and_strip(comment, "This")
print(new)

#strip() is actully remove any unnessery space from a string.. 