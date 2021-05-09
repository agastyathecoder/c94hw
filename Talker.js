function add_user(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("username",user_name);
    window.location="Talker_room.html";
}