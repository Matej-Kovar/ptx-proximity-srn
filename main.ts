let lightLevelSum = 0;
let lightLevelAverage = 0;
let lightLevel = 0;
let timer = control.millis();
let calibrationCounter = 0;
let calibrationCompleted = false;

basic.forever(function(){
    if(calibrationCompleted){
    lightLevel = input.lightLevel();
    if(lightLevel > lightLevelAverage + 10 || lightLevel < lightLevelAverage - 10){
        music.playTone(3500, 50)
    }
    basic.pause(20)
    }
})

input.onButtonPressed(Button.A, function() {
    timer = control.millis();
    calibrationCompleted = false;
    while(control.millis() - timer <= 500){
        lightLevelSum = lightLevelSum + input.lightLevel();
        calibrationCounter++;
        basic.pause(20)
    }
    lightLevelAverage = lightLevelSum / calibrationCounter;
    lightLevelSum = 0;
    calibrationCounter = 0;
    console.log(lightLevelAverage)
    calibrationCompleted = true;
})
