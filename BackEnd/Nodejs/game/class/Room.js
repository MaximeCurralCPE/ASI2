class Room {
    
    constructor(io,roomId,IDplayer1) {
        this.io             = io;    
        this.roomId         = roomId.toString();
        this.gameStarted    = false;
        this.IDplayer1      = IDplayer1;
        this.IDplayer2      = null;

        this.player1Cards   = [];
        this.player2Cards   = [];
    }

    setIDplayer2(IDplayer2) {
        if (this.IDplayer2 == null) {
            this.IDplayer2 = IDplayer2;
            this.startGame();
        }
    }
    getIDplayer1() {
        return this.IDplayer1;
    }
    getIDplayer2() {
        return this.IDplayer2;
    }

    startGame() {
        this.gameStarted = true;
        // Logic to start the game
        this.io.on(this.roomId, (socket,data) => {
            data = JSON.parse(data);
            if (data["Cards"] != null) {
                this.setCards(socket.id,data["Cards"]);
            }
        });
    }

    endGame() {
        this.gameStarted = false;
        // Logic to end the game
    }

    setCards(player,cards) {
        if (player == this.IDplayer1){
            this.player1Cards = cards;
            console.log("player1Cards: "+this.player1Cards);
        };
        elseif(player == this.IDplayer2)
        {
            this.player2Cards = cards;
            console.log("player2Cards: "+this.player2Cards);
        };
            
    }
    sendMessagetoAll(message) {
        temp = this.roomId
        let jsonReply = {
            temp:message
        };
        this.io.emit(this.roomId, jsonReply);
    }
}

module.exports = Room;
