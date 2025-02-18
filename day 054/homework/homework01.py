# 6kyu

# 1) def persistence(n):
    # n = str(n)
    # count = 0
    # while len(n) > 1:
    #     p = 1
    #     for i in n:
    #         p *= int(i)
    #     n = str(p)
    #     count += 1
    # return count
# 8 kyu
# 1) def how_many_dalmatians(n):
#     dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"]
#     return dogs[0] if n <= 10 else dogs[1] if n <=50 else dogs[3] if n == 101 else dogs[2]

# 2) def get_size(w, h, d):
    # area = 2*(w*h + h*d + w*d)
    # volume = w*h*d
    # return [area, volume]

# 3) def correct(string):
    # return string.replace('1','I').replace('0','O').replace('5','S')

# 7 kyu

# 1) def stray(arr):
    # for x in arr:
    #     if arr.count(x) == 1:
    #         return x

# 2) def max_diff(list):
    # return max(list) - min(list) if list else 0

