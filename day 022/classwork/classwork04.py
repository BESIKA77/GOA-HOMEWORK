# შექმენით ფუნქცია რომელსაც გადაეცემა ორი მნიშვნელობა firstnum და secondnum და
# თქვენი დავალებაა იპოვოთ ამ რიცხვებს შორის ყველა რიცხვის ჯამი
def my_func(firstnum, secondnum):
    sum = 0
    if firstnum > secondnum:
        for i in range(secondnum, firstnum):
            sum += i
    else:
        for i in range(firstnum, secondnum):
            sum += i
    return sum
print(my_func(10,40))