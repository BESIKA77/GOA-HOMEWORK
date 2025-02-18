# 4) შექმენით პროგრამა სადაც მომხმარებელს შეეკითხებით რამდენი
# რიცხვის შემოტანა სურს შემდეგ კი for ციკლის მეშვეობით იმდენჯერ
#  შემოატანინეთ რიცხვი რამდენიც მიუთითა ამის შემდეგ ეს რიცხვები
# დაამატეთ სიაში და საბოლოოდ გამოიტანეთ ამ რიცხვების ჯამი
numbers = []
amounth = int(input("please enter how many numbers you want to type: "))
for i in range(amounth):
    user_input = int(input("enter number: "))
    numbers.append(user_input)
print(sum(numbers))