function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
    data() {
        return {
            playerHeath: 100,
            monsterHeath: 100,
            currentRound: 0,
            winner: null,
            logMessages: [],
        };
    },
    watch: {
        playerHeath(value) {
            if (value <= 0 && this.monsterHeath <= 0) {
                this.winner = "draw";
            } else if (value <= 0) {
                this.winner = "monster";
            }
        },
        monsterHeath(value) {
            if (value <= 0 && this.playerHeath <= 0) {
                this.winner = "draw";
            } else if (value <= 0) {
                this.winner = "player";
            }
        },
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHeath < 0) {
                return { width: "0%" };
            } else {
                return { width: this.monsterHeath + "%" };
            }
        },
        playerBarStyles() {
            if (this.playerHeath < 0) {
                return { width: "0%" };
            } else {
                return { width: this.playerHeath + "%" };
            }
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        },
    },
    methods: {
        startGame() {
            this.playerHeath = 100;
            this.monsterHeath = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logMessages = [];
        },
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(5, 12);
            this.monsterHeath -= attackValue;
            this.addLogMessage("player", "attack", attackValue);
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15);
            this.playerHeath -= attackValue;
            this.addLogMessage("monster", "attack", attackValue);
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(10, 25);
            this.monsterHeath -= attackValue;
            this.addLogMessage("player", "attack", attackValue);
            this.attackPlayer();
        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomValue(8, 20);
            if (this.playerHeath + healValue > 100) {
                this.playerHeath = 100;
            } else {
                this.playerHeath += healValue;
            }
            this.addLogMessage("player", "heal", healValue);
            this.attackPlayer();
        },
        surrender() {
            this.winner = "monster";
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value,
            });
        },
    },
});

app.mount("#game");
