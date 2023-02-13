function createElement(type, text = "", classes = []) {
    const element = document.createElement(type);
    if (text) element.textContent = text;
    for (let classItem of classes) element.classList.add(classItem);

    return element;
}

function showPage(title, imgLink, optionalComment = "") {

    const titleElement = createElement("p", title, ["page-title"]);
    const img = createElement("img");
    img.alt = title;
    img.src = imgLink;

    contentDiv.appendChild(titleElement);
    contentDiv.appendChild(img);

    if (optionalComment) {
        const comment = createElement("p", optionalComment, ["optional-comment"])
        contentDiv.appendChild(comment);
    }
    
}

const contentDiv = document.querySelector(".content");
const pages = {
    "home": () => {showPage("Say Hello to Kirby! Now.", "assets/kirby.jpg")},
    "bookmark": () => {showPage("Apparently this is a manga", "assets/chainsaw.jpg", "that's not from me. don't bash me")},
    "codepen": () => {showPage("Sylvain Duriff", "assets/durif.jpg")},
    "user": () => {showPage("Hello there", "assets/quigon.jpg", "I do the fuck i want with my trainings okay")}
}

pages["home"]();


Array.from(document
    .querySelectorAll(".mobile-menu button"))
    .map((element) => {
        element.addEventListener("click", (e) => {
            const buttonClicked = e.target;
            const wanted = buttonClicked.classList[0];
            console.log(buttonClicked);
            
            if (buttonClicked.classList.contains("active-page")) return;
            if (document.querySelector(".active-page"))
                document.querySelector(".active-page").classList.remove("active-page");

            buttonClicked.classList.add("active-page");

            contentDiv.innerHTML = "";
            pages[wanted]();
        });
    });
