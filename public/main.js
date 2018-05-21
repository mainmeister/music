mmtype = {
    artist:0,
    album:1,
    song:2,
    genre:3
};

function mainmenu(menutype){
    switch(menutype){
        case mmtype.album:
            alert('album');
            break;
        case mmtype.artist:
            alert('artist');
            break;
        case mmtype.genre:
            alert('genre');
            break;
        case mmtype.song:
            alert('song');
            break;
    }
}