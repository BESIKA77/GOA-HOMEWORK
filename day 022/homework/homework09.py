# 6. შექმენით ფუნქცია, რომელიც პოულობს ყველაზე გრძელ string'ს string'ების სიაში.
def longest_String(list):
    string = ""
    for i in list:
        if len(i) >= len(string):
            string = i
    return string
print(longest_String(["Andria", "Daviti", "Sandro", "Rati"]))