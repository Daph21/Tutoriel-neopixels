# Tutoriel pour l'utilisation des neopixels

## Step 1
Garde les deux blocs 


## Step 2
Dans l'extension neopixel, sélectionne  ``|| let strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)||``

    ```package

neopixel=github:microsoft/pxt-neopixel
```
    ```blocks
let strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
basic.forever(function () {
	
})
```

## Step 3
Ajoute le bloc`` || neopixel: regler luminosite || ``  à la suite  dans le bloc`` || basic: au demarrage || `` et régle la luminosité a 30

    ```blocks
let strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
strip.setBrightness(30)
basic.forever(function () {
	
})
```


## Step 4
Ajoute le bloc`` || neopixel: afficher arc - en - ciel || ``

    ```blocks
let strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
strip.setBrightness(30)
strip.showRainbow(1, 360)
basic.forever(function () {
	
})
```

## Step 5

Dans le bloc`` || basic: toujours || `` ajoute le bloc`` || neopixel: pivoter || ``

    ```blocks
let strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
strip.setBrightness(30)
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.rotate(1)
})

```

## Step 6
Ajoute le bloc`` || neopixel: montrer || ``  puis  ajoute une pause de 200 ms = `` || basic: pause(ms) 200 || `` dans le bloc`` || basic: toujours || ``

    ```blocks
let strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
strip.setBrightness(30)
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(200)
})
```
## Step 7

Réalise le branchement, télécharge le programme dans le micro: bit et tu seras prêt pour faire des tests.
```blocks
/Capture d'écran, le 2022-10-05 à 13.05.56.png
})
```basic.forever(function () {
	
})
