# 1
numbers = [-1, 5, -6, 7, -43, 87, -32, 92, 0]
positive_numbers = []
negative_numbers = []
for i in range(len(numbers)):
    if numbers[i] == 0:
        continue
    elif numbers[i] < 0:
        negative_numbers.append(numbers[i])
    else:
        positive_numbers.append(numbers[i])
print("this is positive numbers: ", positive_numbers)
print("this is negative numbers: ", negative_numbers)

# 2
numbers_list = []
even_numbers = []
odd_numbers = []
for i in range(10):
    user_numbers = int(input("enter number: "))
    numbers_list.append(user_numbers)

for i in range(len(numbers_list)):
    if numbers_list[i] % 2 == 0:
        even_numbers.append(numbers_list[i])
    else:
        odd_numbers.append(numbers_list[i])
print("this is even numbers: ", even_numbers)
print("this is odd numbers: ", odd_numbers)

# 3
numbers_list = []
double_digit = []

for i in range(10):
    user_numbers = int(input("enter number: "))
    numbers_list.append(user_numbers)

for i in range(len(numbers_list)):
    if numbers_list[i] > 9 and numbers_list[i] < 100:
        double_digit.append(numbers_list[i])
    else:
        continue
print("double digit numbers: ", double_digit) #ორნიშნა
print(len(double_digit)) #ორნიშნების რაოდენობა

# 4
for i in range(25, 51, 2):
    print(i)

# 5 
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
one_fifth = []
for i in range(len(numbers)):
    if numbers[i] % 5 == 0:
        one_fifth.append(numbers[i])
print(sum(one_fifth))

