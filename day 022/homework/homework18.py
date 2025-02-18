# 15. შექმენით ფუნქცია, რომელიც იღებს რაიმე integer'ს
# და თუ ლუწია აბრუნებს True'ს, თუ კენტი False'ს.
def my_func(int):
    if int % 2 ==0:
        return True
    else:
        return False
print(my_func(6))