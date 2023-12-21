class Room {
    
    constructor(io,roomId,IDplayer1) {
        this.io             = io;    
        this.roomId         = roomId.toString();
        this.gameStarted    = false;

        this.IDplayer1      = IDplayer1;
        this.IDplayer2      = null;

        this.player1Cards   = [];
        this.player2Cards   = [];

        this.CorrespondenceIDPlayer = {}

        this.playerTurn = "player1"

    }
    swapPlayerTurn(){

        if (this.playerTurn == "player1"){
            this.playerTurn="player2"

        }
        if (this.playerTurn == "player2"){
            this.playerTurn="player1"

        }


    }
    setIDplayer2(IDplayer2) {
        if (this.IDplayer2 == null) {
            this.IDplayer2 = IDplayer2;
            this.CorrespondenceIDPlayer  = {"player1":this.IDplayer1,"player2":this.IDplayer2}
        }
    }
    getIDplayer1() {
        return this.IDplayer1;
    }
    getIDplayer2() {
        return this.IDplayer2; 
    }

    getCardsPlayer1(){
        return (this.player1Cards)
    }
    getCardsPlayer2(){
        return (this.player2Cards)
    }
    
    sendMessagetoAllinRoom(event,jsonMessage) {
        console.log("Sending message to all in room: "+this.roomId);
        if (this.IDplayer1) {
            sendMessageToPlayer(this.IDplayer1,event,jsonMessage)
        }
    
        if (this.IDplayer2) {
            sendMessageToPlayer(this.IDplayer2,event,jsonMessage)
        }
    }

    sendMessageToPlayer(playerID,event,jsonMessage) {
        console.log("Sending message to "+ playerID);
        this.io.to(playerID).emit(event, jsonMessage);
    }
    tryStartGame(){
        if (this.IDplayer1 && this.IDplayer2 && this.player1Cards != [] && this.player2Cards != []){
                this.startGame();
            }
    }
    startGame() {
        this.gameStarted = true;
        console.log("Game started");
        updateCards();
        this.sendMessageToPlayer(CorrespondenceIDPlayer.get(this.playerTurn),'ChoosePlay',{})
        // Logic to start the game
    
    }
    simulation(localplayer,numberLocalCard,numberAwayCard){
        let carteAttaque;
        let carteDefence;
        let cardSetToChange;
        let playertoChange
        if (localplayer== "player1"){
            carteAttaque = this.player1Cards[numberLocalCard]
            carteDefence = this.player2Cards[numberAwayCard]
            cardSetToChange =this.player2Cards
            playertoChange  = "player2"
        }
        else if (localplayer == "player2"){
            carteAttaque = this.player2Cards[numberLocalCard]
            carteDefence = this.player1Cards[numberAwayCard]
            cardSetToChange =this.player1Cards
            playertoChange  = "player1"

        }
        result = combat(carteAttaque,carteDefence)
        if (result == -1)
            this.player2Cards.pop(numberAwayCard)
        else{
            cardSetToChange[numberLocalCard]= result
        }
        this.setCards(CorrespondenceIDPlayer.get(playertoChange),cardSetToChange)
    }
    combat(carteAttaque,carteDefence){
        carteDefence.hp = carteDefence.defence - carteAttaque.attack
        if (carteDefence.hp > 0){
            return carteDefence
        }
        else {
            return(-1)
        }

    }
    nextTurn(){
        if (this.player1Cards == [] || this.player2Cards == []){
            console.log("finito")
        }
        else{
            this.updateCards()
            this.swapPlayerTurn()
            this.sendMessageToPlayer(CorrespondenceIDPlayer.get(this.playerTurn),'ChoosePlay',{})
        }
    }
    updateCards(){
        let Cards = {
            "player1Cards": this.player1Cards,
            "player2Cards": this.player2Cards
        }
        this.sendMessagetoAllinRoom("UpdateCards",Cards);
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
        };   
    }
}

module.exports = Room;
