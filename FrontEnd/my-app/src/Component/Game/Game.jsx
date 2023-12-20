import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';


export const Game = () => {
    const [roomID, setRoomID] = useState(null);

    useEffect(() => {
        const socketGame = io("http://localhost:3001");
        socketGame.on('RoomID', (data) => {
          console.log(socketGame.id, data);
          if (roomID == null) {
            setRoomID(data.roomID);
          }

          getUserCards().then(Cards => {
            let selectedCards = Cards.slice(0, 4);
            socketGame.emit(roomID, {"Cards": selectedCards});
          });
          
          socketGame.emit(roomID, {"Cards": data.roomID});
        });
    },[]);

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
    
    return(
        <>
            <h1>{roomID}</h1>
        </> 
)
}