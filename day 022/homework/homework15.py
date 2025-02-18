# 12. შექმენით ფუნქცია, რომელიც იღებს string'ს და
# აბრუნებს ხმოვანი ასოების რაოდენობას string'ში.
def my_func(string):
    mobile = ""
    for i in range(len(string)):
        if string[i] == "a" or "e" or "i" or "o" or"u":
            string = i
    return mobile
print(my_func("andria"))