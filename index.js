let projectsContainer = document.querySelector(".projects-container");

let projects = [
    {
        img: "https://i.ibb.co/37Y7ktR/image.png",
        name: "Weather-App",
        preview: "https://n3meee.github.io/Weather-App/",
        source: "https://github.com/N3mEee/Weather-App/",
    },
    {
        img: "https://i.ibb.co/CVkZwcL/image.png",
        name: "Memory Card Game",
        preview: "https://n3meee.github.io/memory-card/",
        source: "https://github.com/N3mEee/memory-card/",
    },
    {
        img: "https://i.ibb.co/t4Hm1yS/image.png",
        name: "Restaurant Page",
        preview: "https://n3meee.github.io/Restaurant-Page/",
        source: "https://github.com/N3mEee/Restaurant-Page/",
    },
    {
        img: "https://i.ibb.co/6wWfC0C/image.png",
        name: "CV Maker App",
        preview: "https://n3meee.github.io/cv-application/",
        source: "https://github.com/N3mEee/cv-application/",
    },
    {
        img: "https://i.ibb.co/rHkQCc6/image.png",
        name: "Knights Travails",
        preview: "https://n3meee.github.io/Knights-Travails/",
        source: "https://github.com/N3mEee/Knights-Travails/",
    },
    {
        img: "https://i.ibb.co/KxNQ1sD/image.png",
        name: "Todo List",
        preview: "https://n3meee.github.io/Todo-List/",
        source: "https://github.com/N3mEee/Todo-List",
    },
    {
        img: "https://i.ibb.co/TttYMG0/image.png",
        name: "Sign up Form",
        preview: "https://n3meee.github.io/Sign-up-Form/",
        source: "https://github.com/N3mEee/Sign-up-Form",
    },
    {
        img: "https://i.ibb.co/myh1fgq/image.png",
        name: "Admin Dashboard",
        preview: "https://n3meee.github.io/Admin-Dashboard/",
        source: "https://github.com/N3mEee/Admin-Dashboard",
    },
    {
        img: "https://i.ibb.co/vvCP7MP/image.png",
        name: "Tic Tac Toe",
        preview: "https://n3meee.github.io/Tic-Tac-Toe/",
        source: "https://github.com/N3mEee/Tic-Tac-Toe",
    },
    {
        img: "https://i.ibb.co/k5N9ZLN/image.png",
        name: "Landing Page",
        preview: "https://n3meee.github.io/Landing-Page/",
        source: "https://github.com/N3mEee/Landing-Page",
    },
];

projects.forEach((project) => {
    createProject(project);
});

function createProject(project) {
    let projectContainer = document.createElement("div");
    projectContainer.className =
        "group relative items-center mx-auto w-96 overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500";
    projectsContainer.appendChild(projectContainer);

    let animatedBorder = document.createElement("div");
    animatedBorder.className =
        "group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible";
    projectContainer.appendChild(animatedBorder);

    let projectBackground = document.createElement("div");
    projectBackground.className = "relative rounded-[15px] bg-white p-6";
    projectContainer.appendChild(projectBackground);

    let projectInfo = document.createElement("div");
    projectInfo.className = "space-y-4";
    projectBackground.appendChild(projectInfo);

    let img = document.createElement("img");
    img.src = project.img;
    img.alt = `Project Image for ${project.name}`;
    projectInfo.appendChild(img);

    let projectTitle = document.createElement("p");
    projectTitle.className = "text-center text-lg font-semibold text-slate-800";
    projectInfo.appendChild(projectTitle);

    let projectLink = document.createElement("a");
    projectLink.href = project.preview;
    projectLink.textContent = project.name;
    projectTitle.appendChild(projectLink);

    let buttons = document.createElement("div");
    buttons.className = "flex justify-evenly";
    projectInfo.appendChild(buttons);

    let buttonPreview = document.createElement("button");
    buttonPreview.className =
        "border-2 border-transparent bg-blue-500 ml-3 py-2 px-4 font-bold uppercase text-white rounded transition-all hover:border-blue-500 hover:bg-transparent hover:text-blue-500";
    buttons.appendChild(buttonPreview);

    let linkPreview = document.createElement("a");
    linkPreview.href = project.preview;
    linkPreview.textContent = "Preview";
    buttonPreview.appendChild(linkPreview);

    let buttonSource = document.createElement("button");
    buttonSource.className =
        "border-2 border-transparent bg-blue-500 ml-3 py-2 px-4 font-bold uppercase text-white rounded transition-all hover:border-blue-500 hover:bg-transparent hover:text-blue-500";
    buttons.appendChild(buttonSource);

    let linkSource = document.createElement("a");
    linkSource.href = project.source;
    linkSource.textContent = "Source";
    buttonSource.appendChild(linkSource);
}
