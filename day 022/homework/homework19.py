# 16. შექმენით ფუნქცია, რომელიც იღებს string'ების
# სიას და აბრუნებს ყველაზე გრძელ string'ს.
def longest_String(list):
    string = ""
    for i in list:
        if len(i) >= len(string):
            string = i
    return string
print(longest_String(["Andria", "Daviti", "Sandro", "Rati"]))