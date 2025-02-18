# 8. შექმენით ფუნქცია, რომელიც იღებს 2 integer'ების list'ს 
# და აბრუნებს ორივე list'იდან მაქსიმალური რიცხვების ჯამს.
def my_func(list1, list2):
    return min("min", list1), max("max",list1), min(list2), max(list2)
print(my_func([7,4,3,6,1,9,3], [4,8,3,8,4,6]))
    