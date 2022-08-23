print("Welcome To FizzBuzz!")
n = int(input("Enter your number: "))
g = (input("Enter Your Guess: "))

if (n // 3 & n // 5):
    u = "FizzBuzz"
    if (g == u):
        print("Correct")
elif(n // 3):
        u = "Fizz"
        if (g == u):
            print("Correct")
elif(n//5):
        u = "Buzz"
        if (g == u):
            print("Correct")
else:
    u = ""
    if (g == u):
        print("Correct")

