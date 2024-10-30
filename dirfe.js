function speedDetector(speed) {
    const speedLimit = 70;

    if (speed <= speedLimit) {
        console.log("OK");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / 5);
        
        if (demeritPoints >= 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}
speedDetector('kuku')
