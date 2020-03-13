// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function tabComponent (object){
    const tab = document.createElement('div');
    tab.classList.add('tab');
    console.log(object);
    tab.textContent = object;
    return tab;
}

const entryPoint = document.querySelector('.topics');
axios.get('https://lambda-times-backend.herokuapp.com/topics').then(response=>{
    //console.log(response);
    for(let i = 0; i<response.data.topics.length; i++){
        entryPoint.append(tabComponent(response.data.topics[i]));
    }
    //console.log(entryPoint);
})
.catch(error => {
    console.log("the data was not returned", error)
})