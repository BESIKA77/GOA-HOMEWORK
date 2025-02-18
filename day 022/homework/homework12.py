# 9. შექმენით ფუნქცია, რომელიც იღებს 2 integer'ების list'ს
# და აბრუნებს ორივე list'იდან მინიმალური რიცხვების სხვაობას.
def min_difference(list1, list2):
    return min(list1) - min(list2)
print(min_difference([3,4,5,6,5,6,4,3], [5,2,7,3,7,3,6,3,6,3]))