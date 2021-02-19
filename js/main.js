window.onload = function(){
    body = document.body
    body.className += " loaded";
}   

loadTimeline();
InitializeTabs();

// Default element to open
document.getElementById("experience").click();

function InitializeTabs() {
    tabs = document.getElementById("master");
    tabNames = ['Skills', 'Experience', 'Projects'];

    tabNames.forEach(item => {
        
        button = document.createElement("button");
        button.classList.add("tablink");
        button.id = item.toLowerCase();
        
        button.addEventListener('click', function(e){
            idName = item.toLowerCase();
            tabs.childNodes.forEach(child => {
                if(child.id == idName){
                    child.classList.add('active');
                }
                else {
                    child.classList.remove('active');
                }
            });

            tabItems = document.getElementsByClassName('tabItem');
            for(tabItem of tabItems){
                if(tabItem.id == idName){
                    tabItem.classList.add('active');
                }
                else {
                    tabItem.classList.remove('active');
                }
            }


        });

        button.innerHTML = `<h2>${item}</h2>`
        tabs.appendChild(button);
    });
    
    tabsY = tabs.offsetTop;
    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= tabsY) {
            tabs.classList.add("sticky")
        } else {
            tabs.classList.remove("sticky");
        }
    });

}

function loadTimeline() {
    experience = document.getElementById("experience")
    
    //Load data from CSV file asynchronously and render chart
    d3.csv('data/experience.csv').then(data => {
        data.forEach((d, index) => {
            d.year = +d.year;

            container = document.createElement("div");
            container.classList.add("container");

            if(index % 2 == 0){
                container.classList.add("left");
            }
            else{
                container.classList.add("right");
            }

            child = document.createElement("div");
            child.classList.add("content");
            child.innerHTML = `
                                <h1>${d.year}</h1>
                                <h3>${d.title}</h3>
                                <h4>${d.company}</h4>
                                <p>${d.description}</p>
                                `;
            container.appendChild(child);
            experience.appendChild(container);
        });

    });

}