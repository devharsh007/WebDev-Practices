const data = [
    {
        id: 1,
        img: "",
        cName: "Sunita",
        CPort: "UI UX Designer",
        Cdesc: "Ullamco commodo ea labore aliqua deserunt cupidatat. Do culpa ex sint sit. Commodo cillum qui minim occaecat esse adipisicing. Aute eu veniam eu nulla amet.",
    }, {
        id: 1,
        img: "",
        cName: "Harsh",
        CPort: "Web Owner",
        Cdesc: "Id labore pariatur sint ex qui deserunt pariatur et aliquip consectetur magna tempor. Aliquip culpa et nostrud aliquip duis in. Ut dolore excepteur ex dolor exercitation proident eiusmod voluptate sint exercitation. Aliqua eu qui laborum est consequat sunt duis dolore sit enim sint qui.",
    }, {
        id: 2,
        img: "",
        cName: "Bipin",
        CPort: "Webb Designer",
        Cdesc: "Nulla qui deserunt veniam ut ex adipisicing veniam laboris ex nostrud proident aliqua commodo. Do quis ipsum mollit in reprehenderit sunt esse ipsum labore laboris quis est adipisicing velit. Sunt commodo reprehenderit velit voluptate amet nostrud laboris minim Lorem ut. Incididunt culpa est reprehenderit amet. Deserunt occaecat adipisicing Lorem cupidatat quis cupidatat ea non adipisicing. Mollit id aliquip aliquip nulla cillum exercitation velit consectetur eu. Non nostrud nisi irure consequat proident ullamco in id magna consectetur laborum Lorem ad.",
    }, {
        id: 1,
        img: "",
        cName: "Chanchal",
        CPort: "Software Developer",
        Cdesc: "Duis laborum aliquip in velit fugiat incididunt voluptate excepteur laboris. Anim deserunt elit nulla ut aute excepteur reprehenderit reprehenderit magna occaecat velit ad. Mollit magna ipsum anim culpa ex sit magna et Lorem proident. Ex culpa in aute sint pariatur cupidatat esse deserunt minim.",
    }, {
        id: 1,
        img: "",
        cName: "B K Sharma",
        CPort: "Backend Developer",
        Cdesc: "Officia pariatur commodo nostrud tempor duis sunt commodo exercitation adipisicing excepteur veniam. Velit velit velit pariatur fugiat adipisicing eu eu quis. Adipisicing et magna nisi id labore occaecat exercitation tempor et eiusmod sunt eiusmod cillum. Incididunt sint duis ullamco incididunt adipisicing elit irure ut aliqua do excepteur eiusmod do incididunt. Voluptate do dolor cillum elit est sunt eiusmod reprehenderit incididunt eiusmod dolor consequat. Duis proident aute voluptate aliquip cillum cillum ipsum fugiat qui proident id reprehenderit. Cupidatat Lorem fugiat ad dolore non Lorem dolor fugiat dolor velit adipisicing.",
    }, {
        id: 1,
        img: "",
        cName: "Swati",
        CPort: "Frontend Developer",
        Cdesc: "Velit irure nostrud officia ullamco do minim ipsum. Qui minim do magna aliqua laborum dolor veniam nulla aliqua eiusmod velit. Do aliqua consequat aliquip anim aliqua labore ipsum cupidatat labore.",
    },
    
];
// Costumer Data
cImg = document.querySelector(".img");
cName = document.querySelector(".c_name");
cPort = document.querySelector(".c_portfolio");
cDesc = document.querySelector(".c-desc");
// buttons
s_btn = document.querySelector("#s_btn");
p_btn = document.querySelector("#p_btn");
n_btn = document.querySelector("#n_btn");

mainDiv = document.querySelector("#main-div");
// Adding EventListeners
s_btn.addEventListener("click", () => {
    let randNum = genRanNum();
    
})
// Generating function
function genRanNum() {
    return Math.floor(Math.random * data.length);
}


