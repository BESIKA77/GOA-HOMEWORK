def odd_index_sum(lst):
    result = 0
    for i in range(len(lst)):
        if i % 2 != 0:
            result += lst[i]
    return result
print(odd_index_sum([1,2,3,4,5,6,7,8]))