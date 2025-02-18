# შექმენით ფუნქცია  print_even_numbers რომელიც მიიღებს ერთ პარამეტრს n შემდეგ
# გამოიტანს 2 დან ამ რიცხვამდე ყველა ლუწ რიცხვს გამოიყენეთ for loop 
def print_even_numbers(n):
    for i in range(2, n, 2):
        print(i)
print_even_numbers(15)