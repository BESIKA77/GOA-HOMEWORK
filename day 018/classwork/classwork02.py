# 2) შექმენით ისეთ პროგრამა რომელიც მომხმარებელს შემოატანინებს 2 რიცხვს.
# შემოტანის შემდეგ for loop ის მეშვეობით გამოთვალეთ ყველა რიცხვი ამ ორ
#  რიცხვს შორის და შემდეგ ისიდი ჩაამატეთ ლისტში საბოოლოოდ კი დაპრინტეთ ტერმინალში
numbers = []
num1 = int(input("enter number: "))
num2 = int(input("enter number: "))
if num1 > num2:
    for i in range(num2 + 1, num1):
        numbers.append(i)
else:
    for i in range(num1 + 1, num2):
        numbers.append(i)
print(numbers)

