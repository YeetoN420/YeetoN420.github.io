
<script>
    let ericsBooleanToControlThePopup = false;

</script>



<header>
    <h1>
        Uttag
    </h1>

    <hr>
</header>


<div class="Navigation-buttons">
    <form action="http://localhost:5173/Project">
        <button class="navigate" type="submit">Hem</button>
    </form>
    
    <form action="http://localhost:5173/Project_Kampanjer">
        <button class="navigate" type="submit">Kampanjer</button>
    </form>
    
    <form action="http://localhost:5173/Project_Regler_och_villkor">
        <button class="navigate" type="submit">Regler och villkor</button>
    </form>
    
    <form action="http://localhost:5173/Project_Insättningar_och_uttag">
        <button class="navigate" type="submit">Uttag</button>
    </form>
</div>


<div class="container">
    <button type="submit" class="Insättning" on:click={()=>{ericsBooleanToControlThePopup=true}} >Uttag</button>

    <div class:openPopup={ericsBooleanToControlThePopup} class="popup" id="popup">
        <img alt="" src="Swish.png">

        <h2>Skicka in ditt summer så ser vi till att du får dina vinster</h2>
        <input type="text" class="Number"/>

        <button type="button" on:click={()=>{ericsBooleanToControlThePopup=false}}>Skikca in</button>
    </div>
</div>

<h2>
Gör enkla och snabba uttag där allt som krävs är ditt nummrer.
</h2>

<hr class="Bot">

<style>

    :global(body) {
        
        background: linear-gradient(0deg, rgba(47,13,13,1) 0%, rgba(250,19,19,1) 100%);
    
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: max-content;
        overflow: auto;
    }

    .Number{
        border: solid;
        margin-bottom: 10px;
        font-size: 25px;
    }

    h1{
        font-size: 60px;
        text-align: center;
    }

    h2{
        text-align: center;
    }

    hr{
        border-color: black;
        outline: none;
    }

    .Bot{
        margin-top: 500px;
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

    </style>