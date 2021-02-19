window.onload = function(){
    body = document.body
    body.className += " loaded";
}   

loadTimeline();
InitializeTabs();

// Get the element with id="defaultOpen" and click on it
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

        button.innerHTML = `<h1>${item}</h1>`
        tabs.appendChild(button);
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