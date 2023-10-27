const serverConfig=(server,config)=>{

    const startServer=()=>{

         server.listen(config.port,()=>{
            console.log(`server listening on port ${config.port}`)
         })

    }
    return {
        startServer
    }
}
export default serverConfig