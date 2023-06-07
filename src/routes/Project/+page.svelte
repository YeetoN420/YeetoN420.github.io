<script>
    import { onMount } from "svelte";
   

    let image;
    let images = ["megawin3.gif", "superwin.gif", "giphy.gif", "jackpot.gif"];

    let ericsBooleanToControlThePopup = false;

// Easy Turtorials kod för bildspel

    onMount(()=>{

        setInterval(function(){
            let random = Math.floor(Math.random() * 4);
            image.src = images[random]; 
        }, 5500);

    })

</script>
<body>
    <main>
        
<!-- Tillgång till spelhjälp och liknande via bilder --> 

        <a href="https://www.spelpaus.se/"> 
            <img class="spelpaus" alt="" src="Spellpaus.png"/>
        </a>

        <a href="https://stodlinjen.se/spelberoende-test-pgsi">
            <img class="självtest" alt="" src="självtest.png"/>
        </a>
        

        <header>
            <h1>Ro💲💲in</h1>
        
            <hr>
        </header>

        
<!-- Buttons som tar en runt till dem olika huvudekoponenterna i sidan/projected -->

        <div class="Navigation-buttons">
            <form action="https://yeeton420.github.io/Project">
                <button class="navigate" type="submit">Hem</button>
            </form>
            
            <form action="http://yeeton420.github.io/Project_Kampanjer">
                <button class="navigate" type="submit">Kampanjer</button>
            </form>
            
            <form action="http://yeeton420.github.io/Project_Regler_och_villkor">
                <button class="navigate" type="submit">Regler och villkor</button>
            </form>
            
            <form action="http://yeeton420.github.io/Project_Insättningar_och_uttag">
                <button class="navigate" type="submit">Uttag</button>
            </form>
        </div>

<!-- Popup för arr göra insättningar -->

        <div class="container">
            <button type="submit" class="Insättning" on:click={()=>{ericsBooleanToControlThePopup=true}} >Insättning</button>

            <div class:openPopup={ericsBooleanToControlThePopup} class="popup" id="popup">
                <img alt="" src="Swish.png">

                <h2>Gör en insättning genom att Swisha nummret</h2>
                <h3>076 794 68 94</h3>

                <button type="button" on:click={()=>{ericsBooleanToControlThePopup=false}}>OK</button>
            </div>
        </div>


<!-- Bildspel -->

        <img alt="" class="reel" id="image" bind:this={image} src="">


<!-- Vart tilgången till casinospelen skulle varit om jag hunnit göra dem -->

        <fieldset class="casinogame">
            <img alt="" src=""/>
            <h4>
                Spel kommer snart!!
            </h4>
        </fieldset>
        
        <fieldset class="casinogame">
            <img alt="" src=""/>
            <h5>
                Spel kommer snart!!
            </h5>
        </fieldset>

        <fieldset class="casinogame">
            <img alt="" src=""/>
            <h6>
                Spel kommer snart!!
            </h6>
        </fieldset>

     </main> 
</body>



<style>

h1{
    font-size: 60px;
    text-align: center;
}

h4{
    margin: auto;
    font-size: 26px;
}

h5{
    margin: auto;
    font-size: 26px;
}

h6{
    margin: auto;
    font-size: 26px;
}

.spelpaus:hover{
    cursor: pointer;
    outline: auto;
}

.spelpaus{
    max-width: 70px;
    max-height: 40px;
    background-color: #fff;
}

.självtest:hover{
    cursor: pointer;
    outline: auto;
}

.självtest{
    min-width: 90px;
    min-height: 37px;
    max-width: 90px;
    max-height: 37px;
    background-color: #fff;
}

:global(body) {

        background: linear-gradient(0deg, rgba(47,13,13,1) 0%, rgba(250,19,19,1) 100%);

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: max-content;
        overflow: auto;
    }

    hr{
        border-color: black;
        outline: none;
    }


.Insättning{
    padding: 10px 60px;
    background: #fff;
    border: 0;
    cursor: pointer;
    font-size: 28px;
    font-weight: 500;
    border-radius: 30px;
    outline: none;
}

.Navigation-buttons{
    display: flex;
}

.navigate{
    padding: 10px 25px;
    margin-left: 10px;
    font-size: 20px;
    font-weight: 500;
    background: none;
    border: none;
    outline: none;
}

.navigate:hover{
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(190,19,19,1) 85%);
}

.navigate:active{
    outline: auto;
}

h3{
    font-size: 30px;
    text-decoration: underline;
}

.popup img{
    width: 250px;
    height: 175px;
    margin-top: -25%;
    border-radius: 20%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.popup button{
    width: 100%;
    
    padding: 10px 0;
    background: #6fd649;
    color: #fff;
    border: 0;
    outline: none;
    font-size: 18px;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
}

.popup{
    width: 400px;
    border-radius: 6px;
    position: absolute;
    background: #fff;
    color: #333;
    left: 50%;
    top: 0;
    transform: translate( -50%, -50%) scale(0.1);
    text-align: center;
    padding: 0px 30px 30px;
    visibility: hidden;
    transition: transform 0.4s, top 0.4s;
}
.openPopup{
    visibility: visible;
    top: 50%;
    transform: translate( -50%, -50%) scale(1);
}

.container{
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}


.casinogame:hover{
    cursor: pointer;
    outline: auto;
}

.casinogame{
    border-color: black;
    border: solid 4px;
    height: 100px;
    width: 150px;
    display: flex;
    flex-direction: row;
    float: left;
    margin: auto;
    margin-left: 20px;
    margin-top: 20px;
    background: linear-gradient(45deg, rgba(220,235,255,1) 0%, rgba(0,18,180,1) 73%);
}

body{
    height: 100vh;
    width: 100vw;

}

.reel{
    display: block;
    transition: 0.3s;
    min-width: 800px;
    min-height: 400px;
    max-width: 800px;
    max-height: 400px;
    border: solid 7px;
    margin: auto;
}

</style>