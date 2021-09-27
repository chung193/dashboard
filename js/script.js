document.addEventListener("DOMContentLoaded", function(event) {

    const showNavbar = (toggleId, navId, bodyId, headerId, contentId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId),
    contentpd = document.getElementById(contentId)
    
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
        toggle.addEventListener('click', ()=>{
                // show navbar
                nav.classList.toggle('show')
                // change icon
                toggle.classList.toggle('bx-x')
                // add padding to body
                bodypd.classList.toggle('body-pd')
                // add padding to header
                headerpd.classList.toggle('body-pd')
                // add padding to content
                contentpd.classList.toggle('body-pd')
            })
        }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header', 'content')
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
        if(linkColor){
            linkColor.forEach(l=> l.classList.remove('active'))
            this.classList.add('active')
        }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
    var plan = document.getElementById("plan-btn");
    var noti = document.getElementById("notification-btn");
    var user = document.getElementById("user-btn");

    plan.addEventListener('click', ()=>{
        // show plan menu
        var menu = document.getElementById("plan-content");
        menu.classList.toggle('show')
    })
    noti.addEventListener('click', ()=>{
        // show plan menu
        var menu = document.getElementById("notification-content");
        menu.classList.toggle('show')
    })
    user.addEventListener('click', ()=>{
        // show plan menu
        var menu = document.getElementById("user-content");
        menu.classList.toggle('show')
    })
});

    