def even_sum(numbers):
    even_sum = []
    for i in numbers:
        if i % 2 == 0:
            even_sum.append(i)
    return sum(even_sum)
print(even_sum([1,2,3,4,5,6,7,8,9]))