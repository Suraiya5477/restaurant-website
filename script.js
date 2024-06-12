


// const imageArray =[
//     {
//         url :'./cake.png',
//     },

//     {
//         url :'./cake_b.png',
//     },

//     {
//         url :'./cake_s.png',
//     },

// ];





// function handleshowmore(event){
//     console.log("show more button clicked");

//     const projectContainer = document.getElementById("projects");
//     console.log(projectContainer);
//     const projectdiv = document.createElement("div");
//     console.log(projectdiv);

//     // for (const image of imageArray){
//     //     // console.log(image);
//     //     const projectdiv = document.createElement("div");
//     //     console.log(projectdiv);
//     //     projectdiv.classList.add("cardimage");
//     //     // const imageElement = document.createElement("img");
//     //     projectdiv.innerHTML = `<img src="${image.url}">`;

//     //     // console.log(projectdiv);
//     //     projectContainer.appendChild(projectdiv);




//     // }


// }



























// const imageArray =[
//     {
//         url :'./cake.png',
//     },

//     {
//         url :'./cake_b.png',
//     },

//     {
//         url :'./cake_s.png',
//     },

// ];





// function handleshowmore(event){
//     console.log("show more button clicked");

//     const projectContainer = document.getElementById("project");
//     console.log(projectContainer);
    

    


// }




// const imageArray = [
//     {
//         url: './cake.png',
//     },
//     {
//         url: './cake_b.png',
//     },
//     {
//         url: './cake_s.png',
//     },
// ];


// const imagetext = [
//     {
//         title: 'Momos',
//         text: 'Chicken <br>$5.15',  
//     },
//     {
//         title: 'Burger',
//         text: 'Chicken <br>$5.15',
//     },
//     {
//         title: 'Pizza',
//         text: 'Chicken <br>$5.15',
//     },  
// ];







// function handleshowmore(event) {
//     console.log("show more button clicked");

//     const projectContainer = document.getElementById("projects");
//     console.log(projectContainer);

//     // Iterate over the image array and create new project divs
//     imageArray.forEach((imageData, index) => {
//         // Create a new div element with class "cardimages"
//         const newProjectDiv = document.createElement("div");
//         newProjectDiv.id = "project";
//         newProjectDiv.className = "cardimages";

//         // Create the inner div for the image
//         const imageDiv = document.createElement("div");
//         imageDiv.style.position = "absolute";
//         imageDiv.style.zIndex = 5;
//         imageDiv.style.marginLeft = "72px";
//         imageDiv.style.marginTop = "-65px";
//         imageDiv.className = "cardimage";

//         // Create an img element
//         const imgElement = document.createElement("img");
//         imgElement.className = "cimage";
//         imgElement.src = imageData.url;

//         // Append the img element to the imageDiv
//         imageDiv.appendChild(imgElement);

//         // Create the inner div for the card content
//         const cardDiv = document.createElement("div");
//         cardDiv.style.position = "absolute";
//         cardDiv.style.zIndex = 3;
//         cardDiv.className = "card";

//         // Create the card-content div
//         const cardContentDiv = document.createElement("div");
//         cardContentDiv.className = "card-content";

//         // Create the h5 element for the card title
//         const cardTitle = document.createElement("h5");
//         cardTitle.className = "card-title";
//         cardTitle.innerText = "Momos";

//         // Create the p element for the card text
//         const cardText = document.createElement("p");
//         cardText.className = "card-text";
//         cardText.innerHTML = "Chicken <br>$5.15";

//         // Append card title and text to card-content div
//         cardContentDiv.appendChild(cardTitle);
//         cardContentDiv.appendChild(cardText);

//         // Append card-content div to cardDiv
//         cardDiv.appendChild(cardContentDiv);

//         // Append imageDiv and cardDiv to newProjectDiv
//         newProjectDiv.appendChild(imageDiv);
//         newProjectDiv.appendChild(cardDiv);

//         // Append newProjectDiv to projectContainer
//         projectContainer.appendChild(newProjectDiv);
//     });
// }


const imageArray = [
    {
        url: './cake.png',
    },
    {
        url: './cake_b.png',
    },
    {
        url: './cake_s.png',
    },
];

const imagetext = [
    {
        title: 'Cake',
        text: 'Chocolate <br>$5.15',
    },
    {
        title: 'Cake',
        text: 'Blue Berry <br>$5.15',
    },
    {
        title: 'Pizza',
        text: 'Strawberry <br>$5.15',
    },
];

function handleshowmore(event) {
    console.log("show more button clicked");

    const projectContainer = document.getElementById("projects");
    console.log(projectContainer);

    // Iterate over the image array and create new project divs
    imageArray.forEach((imageData, index) => {
        // Create a new div element with class "cardimages"
        const newProjectDiv = document.createElement("div");
        newProjectDiv.id = "project";
        newProjectDiv.className = "cardimages";

        // Create the inner div for the image
        const imageDiv = document.createElement("div");
        imageDiv.style.position = "absolute";
        imageDiv.style.zIndex = 5;
        imageDiv.style.marginLeft = "72px";
        imageDiv.style.marginTop = "-65px";
        imageDiv.className = "cardimage";

        // Create an img element
        const imgElement = document.createElement("img");
        imgElement.className = "cimage";
        imgElement.src = imageData.url;

        // Append the img element to the imageDiv
        imageDiv.appendChild(imgElement);

        // Create the inner div for the card content
        const cardDiv = document.createElement("div");
        cardDiv.style.position = "absolute";
        cardDiv.style.zIndex = 3;
        cardDiv.className = "card";

        // Create the card-content div
        const cardContentDiv = document.createElement("div");
        cardContentDiv.className = "card-content";

        // Create the h5 element for the card title
        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.innerText = imagetext[index].title;

        // Create the p element for the card text
        const cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.innerHTML = imagetext[index].text;

        // Append card title and text to card-content div
        cardContentDiv.appendChild(cardTitle);
        cardContentDiv.appendChild(cardText);

        // Append card-content div to cardDiv
        cardDiv.appendChild(cardContentDiv);

        // Append imageDiv and cardDiv to newProjectDiv
        newProjectDiv.appendChild(imageDiv);
        newProjectDiv.appendChild(cardDiv);

        // Append newProjectDiv to projectContainer
        projectContainer.appendChild(newProjectDiv);
    });
}
