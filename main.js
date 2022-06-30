function main() {

    let winNotChangingDoor = 0;
    let winChangingDoor = 0;
    for (let i = 0; i < 20000; i++) {
        const door1 = 0.3333333333333;
        const door2 = 0.6666666666666;
        const door3 = 0.9999999999999;
        const repeat = 0.0000000000001;
        let winningDoor = 0;
        let goatDoor = 0;
        let revealedDoor = 0;
        let choosenDoor = 0;

        const chance = Math.random();

        const choice = Math.random();

        if (choice === repeat) {
            i--;
            continue;
        }

        if (chance === repeat || choice === repeat) {
            i--;
            continue;
        }
        if (chance <= door1) {
            winningDoor = 1;
            if (Math.random() < 0.5) { goatDoor = 2; revealedDoor = 3; }
            else { goatDoor = 3; revealedDoor = 2; }

            revealedDoor = 3;
        } else if (chance <= door2) {
            winningDoor = 2;
            if (Math.random() < 0.5) { goatDoor = 1; revealedDoor = 3; }
            else { goatDoor = 3; revealedDoor = 1; }
        } else {
            winningDoor = 3;
            if (Math.random() < 0.5) { goatDoor = 1; revealedDoor = 2; }
            else { goatDoor = 2; revealedDoor = 1; }
        }



        if (choice <= door1) {
            choosenDoor = 1;
        } else if (choice <= door2) {
            choosenDoor = 2;
        } else {
            choosenDoor = 3;
        }

        if (i >= 10000) {
            // No switch
            if (choosenDoor === winningDoor) {
                winNotChangingDoor++;
            }
        } else {
            // Switch
            if (choosenDoor === 1 && revealedDoor === 2) choosenDoor = 3;
            if (choosenDoor === 1 && revealedDoor === 3) choosenDoor = 2;

            if (choosenDoor === 2 && revealedDoor === 1) choosenDoor = 3;
            if (choosenDoor === 2 && revealedDoor === 3) choosenDoor = 1;

            if (choosenDoor === 3 && revealedDoor === 2) choosenDoor = 1;
            if (choosenDoor === 3 && revealedDoor === 1) choosenDoor = 2;
            if (choosenDoor === winningDoor) {
                winChangingDoor++;
            }
        }




    }

    console.log('winNotChangingDoor');
    console.log(winNotChangingDoor);
    console.log('winChangingDoor');
    console.log(winChangingDoor);
}

main();