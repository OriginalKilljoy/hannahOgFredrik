//MODEL



//VIEW

updateView()

function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    
    <div id="frontPage" class="frontPage">Jasså? Dere fant skatten? Ja da gjenstår det bare å skrive inn den hemmelige koden nedenfor og løs mysteriet.
    <br> Det skal ikke være mellomrom, og kun små bokstaver
    <br>
    <input onchange="changePage(this.value)">
    </div>
    `
}

function prizePage(){
    document.getElementById('frontPage').innerHTML = /*HTML*/`
    <div>Gratulerer!! Dere får 200 norske kroner som går mot bryllupsreisen. Send Julie den Snåle en melding om at dere har knukket koden, så blir det vippset snarest!</div>
    `
}

//CONTROLLER

function changePage(){
    if(input = "gratulerermedbryllupsdagentilderåestefolkajegkjenner"){
        prizePage()
}
}