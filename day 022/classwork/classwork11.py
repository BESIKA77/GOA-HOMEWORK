# შექმენით ფუნქცია find_maximum რომელსაც გადაასცემთ
# ორ მნიშვნელობას მაგალიტად num1 და num2 შემდეგ
# დააბრუნეთ აქედან რომელიც უფრო მეტია
def find_maximum(num1, num2):
    if num1 > num2:
        return num1
    elif num1 < num2:
        return num2
    else:
        return "they are equal"
print(find_maximum(8,4))

