// ==UserScript==
// @name         Not That Annoying Hipchat
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        https://*.hipchat.com/chat*
// @grant        MIT
// ==/UserScript==

$(function(){

    function resetRoomNameStyle( elem ){
        $(elem).css("text-decoration","none" );
    }
    
    function applyRoomNameStyle( elem ) {
        $( elem).css("text-decoration","underline" );
    }
    
    function applyBadgeStyle( badge, noteCount ) {
       $( badge ).hide();
    }

    $(".room-name").parent().click(  
        function( nameParent ) { 
            resetRoomNameStyle( $(nameParent).find(".room-name") );
        } );
    
    

    setInterval(function(){
        $(".room-name").each( function(){
            resetRoomNameStyle( this );
        });

        $(".hc-badge").each( function( i, e ) {
            var noteCount = parseInt($(e).text());
            applyBadgeStyle( e, noteCount );
            var roomName = $(e).parent().find(".room-name");
            if ( noteCount > 0 ){
                applyRoomNameStyle( roomName ); 
            } else {
                resetRoomNameStyle( roomName );
            }
        });
        changeFavicon();


    }, 5000 );

    function changeFavicon() {
        $(document).find("link[rel=\"icon\"]").remove();
        var link = document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'icon';
        link.href = 'https://hipchat.com/apple-touch-icon-57x57.png';
        document.getElementsByTagName('head')[0].appendChild(link);
    };
    
});
