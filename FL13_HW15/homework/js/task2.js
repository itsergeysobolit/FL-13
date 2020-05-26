function Vehicle(color, engine) {
    this.color = color;
    this.engine = engine;
    this.maxSpeed = 70;
    this.model = 'unknown model';
    this.speed = 0;
    this.maxReachedSpeed = 0;

    this.interval;
    this.movesFlag = false;
    this.stopsFlag = false;
    this.drivesFlag = false;
}
function Car(model, color, engine) {
    Vehicle.call(this, color, engine);
    this.maxSpeed = 80;
    this.model = model;
}
function Motorcycle(model, color, engine) {
    Vehicle.call(this, color, engine);
    this.maxSpeed = 90;
    this.model = model;
}
Vehicle.prototype.upgradeEngine = function (newEngine, maxSpeed) {
    if (!this.movesFlag) {
        this.engine = newEngine;
        this.maxSpeed = maxSpeed;
    }
};
Vehicle.prototype.getInfo = function () {
    return {
        engine: this.engine,
        color: this.color,
        maxSpeed: this.maxSpeed,
        model: this.model
    };
};
Vehicle.prototype.drive = function () {
    const DELAY = 2000;

    if (this.drivesFlag) {
        console.log('Already driving');
    } else if (!this.drivesFlag) {
        this.movesFlag = true;
        this.drivesFlag = true;
        this.stopsFlag = false;

        clearInterval(this.interval);
        this.interval = setInterval(() => {
            this.speed += 20;
            console.log(this.speed);
            this.maxReachedSpeed = Math.max(this.speed, this.maxReachedSpeed);
            if (this.speed > this.maxSpeed) {
                this.highSpeedAlert();
            }
        }, DELAY);
    }
};
Vehicle.prototype.highSpeed = function () {
    console.log('speed is too high, SLOW DOWN!');
};
Vehicle.prototype.stop = function () {
    const SLOWING_TIMEOUT = 1500;

    if (!this.movesFlag) {
        console.log('Already stopped');
    } else if (!this.stopsFlag) {
        this.movesFlag = true;
        this.drivesFlag = false;
        this.stopsFlag = true;

        clearInterval(this.interval);
        this.interval = setInterval(() => {
            this.speed -= 20;
            console.log(this.speed);
            if (this.speed <= 0) {
                this.movesFlag = false;
                this.drivesFlag = false;
                this.stopsFlag = false;
                clearInterval(this.interval);
                this.stopAlert();
            }
        }, SLOWING_TIMEOUT);
    } else {
        console.log('Already slows down');
    }
};
Vehicle.prototype.stopAlert = function () {
    console.log(
        `Vehicle ${this.model} is stopped. Maximum speed during the drive ${this.maxReachedSpeed} `
    );
};
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.stopAlert = function () {
    console.log(
        `Car ${this.model} is stopped. Maximum speed during the drive ${this.maxReachedSpeed} `
    );
};
Car.prototype.changeColor = function (newColor) {
    if (this.color !== newColor) {
        this.color = newColor;
    } else {
        console.log(
            'The car is already painted in this color, choose another one, please'
        );
    }
};
Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;

Motorcycle.prototype.highSpeed = function () {
    const OVERHEATING = 30;
    console.log('speed is too high, SLOW DOWN!');
    if (this.speed - this.maxSpeed >= OVERHEATING) {
        console.log('Engine overheating');
        this.stop();
    }
};
Motorcycle.prototype.stopAlert = function () {
    console.log(`Motorcycle ${this.model} is stopped. Good drive`);
};