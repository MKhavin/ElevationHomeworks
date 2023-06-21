const SongsManager = function () {
    let songs = {}

    const _extractVideoId = function (url) {
        const reg = /v=/
        const id = url.slice(url.search(reg) + 2) 

        return id
    }

    const addSong = function (name, url) {
        songs[name] = _extractVideoId(url)
    }

    const getSong = function (name) {
        const id = songs[name]

        console.log(`https://www.youtube.com/watch?v=${id}`)
    }

    return {
        addSong,
        getSong
    }
}



const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
