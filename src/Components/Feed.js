import React, { useState, useEffect } from 'react';
import styles from "./Feed.module.css";




const Feed = props => {


    const [ state, setState ] = useState({})

    // const useState = () => {

    // }

    // let ws = new WebSocket("ws:localhost:8080");

    // ws.onopen('message', (message: string) => {
    //     wss.clients.forEach( client => {
    //         if(client != ws){
    //             client.send("HETY DUUDE");
    //         } else {
    //             ws.send("Hey dod, " + message);
    //         }
    //     })
    // })





    useEffect( () => {
        let ws = new WebSocket("ws:localhost:8080");

        ws.onopen = () => {
            console.log("Feed is connect ....");

            // ws.send("connected");

            ws.onmessage = (ev) => {

                let msgArr = state.messages ? state.messages : [];


                msgArr.push({message: ev.data})
                console.log(state.messages)



                // console.log("hey dude what up")

                // messages.push(ev)

                setState({ messages: msgArr })




                console.log('message from server', ev)
            }
        }
    }, [])




    return  <div className={styles.div}>
                
                {
                 state.messages ?
                state.messages.map( m => (
                    <div>
                    <p style={{color: "white"}}>{m.message}</p><br/>
                    </div>
                ))
            
             :
             null
            }
            </div>

}

export default Feed;