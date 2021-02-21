import e from 'express';
import React from 'react';




const Feed = props => {

    let ws = new WebSocket("ws:localhost:8080");

    ws.onopen('message', (message: string) => {
        wss.clients.forEach( client => {
            if(client != ws){
                client.send("HETY DUUDE");
            } else {
                ws.send("Hey dod, " + message);
            }
        })
    })




    return  <div>

    </div>

}

export default Feed;