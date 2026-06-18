// Student Projects Database - 25 Completed Projects
const projects = [
    {
        id: 1,
        name: "Obstacle avoidance Robot",
        image: "image/obstacle robot.webp",
        description: "Smart robot that detects and avoids obstacles automatically using ultrasonic sensors",
        components: ["Arduino Uno", "Ultrasonic Sensor (HC-SR04)", "L298N Motor Driver", "BO Motors (4)", "servo", "Chassis", "Wheels", "Battery Holder","battery", "Jumper Wires", "Labour charge =500"],
        price: 2000
    },
    {
        id: 2,
        name: "Smart Parking System",
        image: "image/smart parking.jpg",
        description: "IoT-based parking system with real-time slot availability and automatic gate control",
        components: ["ESP32", "IR Sensors (5)", "Servo Motor", "Bread board","lcd display","web page","cars", "making cose = 500"],
        price: 1800
    },
    {
        id: 3,
        name: "Line Following Robot",
        image: "image/line robot.webp",
        description: "Autonomous robot that follows a black line on white surface using IR sensors",
        components: ["Arduino Uno", "IR Sensors (2)", "L298N Motor Driver", "BO Motors (4)", "Robot Chassis", "Wheels", "li battery", "Jumper Wires", "making cost = 500rs"],
        price: 2000
    },
    {
        id: 4,
        name: "smart helmet",
        image: "image/smart helmet.png",
        description: "Smart helmet using 2 esp32 with esp now communication protocol",
        components: ["esp32(2)", "ir sensor", "alcohol sensor", "BO Motors ", "relay", "9v battery", "Buzzer", "making cost =500rs"],
        price: 1800
    },
    {
        id: 5,
        name: "Home Automation System",
        image: "image/home automation.png",
        description: "Complete home automation with smartphone control for lights, fans, and appliances",
        components: ["ESP32", "4-Channel Relay", "led(3)", "motor", "battery 9v", "web page", "Jumper Wires", "bread board", "making cost=500"],
        price: 1400
    },
    {
        id: 6,
        name: "sleep detection while driving",
        image: "image/sleep.png",
        description: "driver sleeped when driving car it detect and stop the car immediately",
        components: ["esp32(2)", "eye blink sensor", "relay", "motor", "Buzzer", "9v battery", "jumper", "making cost=500"],
        price: 1900
    },
    {
        id: 7,
        name: "Weather Monitoring Station",
        image: "image/weather.png",
        description: "IoT weather station displaying temperature, humidity, and pressure with cloud storage",
        components: ["ESP32", "DHT22 Sensor", "BMP180 Sensor", "OLED Display", "Rain Sensor", "jumper", "Battery", "web page", "bread board", "making cost =500"],
        price: 2000
    },
    {
        id: 9,
        name: "Automatic Plant Watering System",
        image: "image/irrigation.png",
        description: "Smart irrigation system that waters plants based on soil moisture levels",
        components: ["Arduino Uno", "Soil Moisture Sensor", "Relay Module", "Water Pump", "Pipe", "LCD Display", "9v battery", "Container", "making cost =500"],
        price: 1400
    },
    {
        id: 10,
        name: "RFID Door Lock System",
        image: "image/door lock.png",
        description: "Secure door lock system using RFID cards with access logging",
        components: ["Arduino Uno", "RFID Module", "RFID Cards (2)", "solenoid lock", "LCD Display", "Buzzer", "LED", "12v adaptor","relay module","breadboard","making cost =500"],
        price: 1800
    },
    {
        id: 11,
        name: "Voice Controlled Home Appliances",
        image: "image/voice automation.png",
        description: "Control home appliances using voice commands",
        components: ["vc 02", "motor", "4-Channel Relay", "LED", "batteries", "breadboard", "holder", "jumper Wires","making cost = 500"],
        price: 1500
    },
    {
        id: 12,
        name: "Solar Tracking System",
        image: "image/solar tracker.png",
        description: "Automatic solar panel positioning system for maximum energy efficiency",
        components: ["Arduino Uno", "LDR Sensors (4)", "Servo Motors (2)", "Solar Panel", "Mounting Frame", "Jumper Wires","making cost = 500"],
        price: 1000
    },
    {
        id: 13,
        name: "smart Attendance System",
        image: "image/attandance.png",
        description: "RFID attendance system with data stored in google sheet using WiFi",
        components: ["esp32", "RFID", "RFID tags", "breadboard", "LCD Display", "Buzzer", "google sheet integration","making cost = 500"],
        price: 4800
    },
    {
        id: 14,
        name: "WiFi Controlled Car",
        image: "image/Wifi car.png",
        description: "Smartphone controlled RC car with wifi communication",
        components: ["esp32", "batteries", "L298N Motor Driver", "BO Motors (4)", "Car Chassis", "Wheels", "holder", "webpage","jumper cables","making cost = 500"],
        price: 2000
    },
    {
        id: 15,
        name: "smart transformer monitoring system",
        image: "image/transformer.png",
        description: "realtime transformer monitoring using webpage integration",
        components: ["ESP32", "temperature sensor", "voltage sensor", "current sensor", "lcd display", "relay", "buck connverter", "transformer","bridge rectifier,capacitor","10w bulb/dc fan","jumper","ultrasonic", "making cost = 500"],
        price: 2300
    },
    {
        id: 16,
        name: "RFID based payment system",
        image: "image/payment.png",
        description: "RFID based payment system with google sheet integration for payment history",
        components: ["esp32", "RFID", "Buzzer", "RFID TAGS", "lcd display", "jumper", "3*4 keypad", "bread board","making cost = 500"],
        price: 1600
    },
    {
        id: 17,
        name: "water level indicator",
        image: "image/water level.png",
        description: "Precision water level indication using arduino uno",
        components: ["Arduino uno", "water level sensor", "LCD Display", "breadboard", "led", "jumper wires", "making cost = 500"],
        price: 1300
    },
    
];