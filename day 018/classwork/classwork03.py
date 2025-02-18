# 3) შექმენით პროგრამა სადაც მომხმარებელი შემოიტანს ორ
# რიცხვს საწყისი რიცხვი და ბოლო რიცხვი, გამოიანგარიშეთ 
# ამ რიცხვებს შორის ყველა რიცხვი და დაამატეთ სიაში, 
# საბოლოოდ დაბეჭდეთ ამ სიიდან მაქსიმალური, მინიმალური
# და ყველა რიცხვის ჯამის მნიშნელობები
numbers = []
first = int(input("enter number: "))
last = int(input("enter number: "))
if first > last:
    for i in range(first + 1, last):
        numbers.append(i)
else:
    for i in range(first + 1, last):
        numbers.append(i)
print(min("min", numbers))
print(max("max", numbers))