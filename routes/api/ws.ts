import { Handlers } from "$fresh/server.ts";


const kv = await Deno.openKv();

const connections = new Map();

export const handler: Handlers = {

    GET(request) {
        const {socket, response } = Deno.upgradeWebSocket(req);
        let userId = null;

        socket.onopen = () => {
            console.log("connected to socket")
        }

        socket.onmessage = async(e) => {

            const message = JSON.parse(e.data)


            if (message.type == "create"){
                const newCode = Math.random().toString(32).substring(0,8)
                const hostId = crypto.randomUUID();
                


                await kv.set(["lobbies", newCode], {
                    players: [
                        { id: hostId, name: message.username }

                    ],

                    host: message.username
                })
                

                connections.set(hostId, socket);
                userId = hostId

                socket.send(JSON.stringify({
                    type: "created",
                    code: newCode,
                    players: [message.username]
                }))


            }

            
        }

    }
}