import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useDispatch,useSelector } from 'react-redux';


export const Game = () => {
    const [socketGame, setSocketGame] = useState(null);
    const [localCards, setLocalCards] = useState([]);
    const [awayCards, setAwayCards] = useState([]);

    const [roomID, setRoomID] = useState(null);

    const [localplayer, setlocalplayer] = useState(null);
    const [awayplayer, setawayplayer] = useState(null);

    const getUserCards = async () => {    
        let retData     = null;
        let inventory   = [];
        let card        = null;
        
        const response = await fetch('http://localhost:80/api/user/'+userID, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 200) {
            retData = await response.json();
            inventory = await Promise.all(retData.cardList.map(async cardID => {
                const reponseForCard = await fetch('http://localhost:80/api/card/'+cardID.toString(), {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                card = await reponseForCard.json();                  
                return card;
            }));
        }
        else {
            console.error('There was an error!', await response.text());
        }

        return inventory;
}

    let userID = useSelector(
        state => (
            state.userReducer.userID
            )
        );
    userID              = userID +1;
    userID              = userID.toString();
    useEffect(() => {
        console.log("Game useEffect");
        let socketGameTmp = io("http://localhost:3001");
        

        socketGameTmp.on('roomID', (data) => {
            console.log("roomID: " + data.roomID);
            if (roomID == null) {
                setRoomID(data.roomID);
                setlocalplayer(data.localplayer);
                setawayplayer(data.awayplayer);
            }
            getUserCards().then(Cards => {
                let selectedCards = Cards
                if (Cards.length < 4) {
                    console.log("Not enough cards");
                }
                else {
                    selectedCards = Cards.slice(0, 4);
                }
                let jsonReply = {
                    "roomID": data.roomID,
                    "Cards": selectedCards
                }
    
                socketGameTmp.emit("Cards",jsonReply);
                });
        });

        socketGameTmp.on("UpdateCards", (data) => {
            console.log("data: " + data);

            //https://socket.io/how-to/use-with-react
            //setFooEvents(previous => [...previous, value]);
            setAwayCards(data[awayplayer+"Cards"]);
            console.log("awayplayer: " + awayCards);

            setLocalCards(data[localplayer+"Cards"]);
            console.log("localplayer: " + localCards);

        });
        
        socketGameTmp.on("ChoosePlay", (socket,data) => {
            const numberLocalCard = Math.floor(Math.random() * localCards.length) ;
            const numberAwayCard = Math.floor(Math.random() * awayCards.length);
            let jsonReply = {
                "roomID": roomID,
                "LocalCard": numberLocalCard,
                "AwayCard": numberAwayCard,
                "localplayer": localplayer,
            }

            socketGameTmp.emit("Attaque",jsonReply);
            });
        
        //setSocketGame(socketGameTmp);
        
        
    },[]);

   
    return(
        <>
            <h1>{roomID}</h1>
            
            <p>LocalCards  : {localCards}</p>
            <p>AwayCards  : {awayCards}</p>
        </> 
)
}