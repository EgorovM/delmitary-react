class Car:
    def __init__(self, color, speed=12, brand='niva'):
        self.color = color
        self.speed = speed
        self.brand = brand

    def get_color(self):
        return self.color

    def set_color(self, color):
        self.color = color
    
    def get_speed(self):
        return self.speed

    def set_speed(self, speed):
        if speed > 0:
            self.speed = speed

    def get_brand(self):
        return self.brand
    
    def set_brand(self, brand):
        self.brand = brand
    
    def move(self):
        print('Двигаюсь')

    def __add__(self, other_car):
        new_car = Car(
            speed=self.speed + other_car.speed,
            brand=self.brand,
            color=self.color
        )
        return new_car


    def __sub__(self, other_car):
        new_car = Car(
            speed=self.speed - other_car.speed,
            brand=self.brand,
            color=self.color
        )
        return new_car


class AeroCar(Car):
    def fly(self):
        print('Летать')


class WaterCar(Car):
    def swim(self):
        print('Плаваю')


class Driver:
    def __init__(self, car):
        self.car = car
