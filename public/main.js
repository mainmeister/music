var data = {
    mmtype : {
        artist:0,
        album:1,
        song:2,
        genre:3
    }
};

new Vue({
    el: '#app',
    data: data,
    methods:{
        mainmenu: function(menutype){
            switch(menutype){
                case this.mmtype.album:
                    alert('album');
                    break;
                case this.mmtype.artist:
                    alert('artist');
                    break;
                case this.mmtype.genre:
                    alert('genre');
                    break;
                case this.mmtype.song:
                    alert('song');
                    break;
            }
        }
    }
})

