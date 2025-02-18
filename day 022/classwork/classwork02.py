# შექმენით ფუნქცია manual_sum ჩვენი ფუნქცია მიირესბს ერთ მნიშვნელბას სიას.
# თქვენი დავალება არის გაიგოთ ამ სიის რიცხვთა ჯამი გაიგოთ for ციკლის მეშვეობით
def manual_sum(numbers_list):
    sum = 0

    for num in numbers_list:
        sum = sum + num
    
    return sum


print(manual_sum([1,2,3]))
    