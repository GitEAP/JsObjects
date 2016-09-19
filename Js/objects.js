//Objects lesson.
var Robot = {
    fuel: 100,
    weapon: "laser",
    speed: 10,
    strength: 5,
    armor: "light",

    addFuel: function (tank) {
        fuel += tank;
    },

    upgradeArmor: function (change) {
        this.armor = change;
    },

    changeWeapon: function (change) {
        weapon = change;
    }
}

Robot.speed += parseInt(prompt("Increase Robot speed."));
alert("Our Robot now has a speed of " + Robot.speed);
Robot.upgradeArmor(prompt("What should we upgrade the armor to?"));
alert("Our Robot now has " + Robot.armor + " armor.");