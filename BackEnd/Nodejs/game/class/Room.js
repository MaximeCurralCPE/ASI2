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
        }
    }
    getIDplayer1() {
        return this.IDplayer1;
    }
    getIDplayer2() {
        return this.IDplayer2; 
    }
    sendMessagetoAllinRoom(event,jsonMessage) {
        console.log("Sending message to all in room: "+this.roomId);
        if (this.IDplayer1) {
            this.io.to(this.IDplayer1).emit(event, jsonMessage);
        }
        
        if (this.IDplayer2) {
            this.io.to(this.IDplayer2).emit(event, jsonMessage);
        }
    }
    startGame() {
        this.gameStarted = true;
        console.log("Game started");
        let initMessage = {
            "player1Cards": this.player1Cards,
            "player2Cards": this.player2Cards
        }
        this.sendMessagetoAllinRoom("UpdateCards",initMessage);
        // Logic to start the game
    
    }
    
    endGame() {
        this.gameStarted = false;
        // Logic to end the game
    }

    setCards(player,cards) {
        if (player == this.IDplayer1){
            this.player1Cards = cards;
            console.log("player1Cards: "+this.player1Cards);
        }
        else if(player == this.IDplayer2)
        {
            this.player2Cards = cards;
            console.log("player2Cards: "+this.player2Cards);
            this.startGame();
        };   
    }
}

module.exports = Room;
