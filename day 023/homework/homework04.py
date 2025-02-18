# 4) შექმენით ფუნქცია რომელსაც გადაეცემა ლისტი.
# ფუნქციამ უნდა იპოვოს ლისტში უდიდესი რიცხვი.
def longest_num(list):
    num = 0
    for i in list:
        if i > num:
            num = i
    return num
print(longest_num([3,5,8,2,9,1,7,8,5,3]))