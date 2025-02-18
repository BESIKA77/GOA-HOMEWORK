def odd_index_sum(numbers):
    odd = []
    for i in numbers:
        if i % 2 != 0:
            odd.append(i)
    return sum(odd)
print(odd_index_sum([1,2,3,4,5,6,7,8,9]))