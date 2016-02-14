// https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/

$(document).ready(function () {
    "use strict";

    function Xbox() {
        "use strict";

    }

    Xbox.prototype.setGamerTag = function (gamerTag) {
        "use strict";

        console.log('My Gamer Tag: ', gamerTag);
    }

    Xbox.prototype.playGame = function () {
        "use strict";

        // ES5 Pattern gives error: Uncaught TypeError: this.setGamerTag is not a function
        $('#gamerTag').click(function () {
            this.setGamerTag('gauravmuk');
        });

        // Arrow helps us solve it
        $('#gamerTag').click(event => {
            this.setGamerTag('gauravmuk');
        });
    }

    var xboxOne = new Xbox();

    xboxOne.playGame();
});