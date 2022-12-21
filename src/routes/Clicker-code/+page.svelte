<script>
    let clicks = 0;

    let SaulGoodMan = 50;

   
    function GoodMan(){
        SaulGoodMan *= 3;
    }
    
    function addclicks(){
        clicks++;
        if (clicks == SaulGoodMan){
        GoodMan()
        }
    }
</script>

<h1>Eriks Great Clicker!!!</h1>
<hr>
<h2>Click here for happines</h2>

<button class="balls" on:click={addclicks}>{clicks} Balls</button> 
<form action="http://localhost:5173/">
<button class="shop" type="submit">SHOP</button> 
</form>
<h3>CLICK ABOVE ENTER SHOP</h3>
<br>
<h4>Reach {SaulGoodMan} Balls to make SaulGoodMan proud of you!!!!!</h4>

<img alt src="https://www.cafe.se/app/uploads/2017/04/better-call-saul-sasong-3.jpg" class="saul">

<style>
.balls {
    width: 200px;
    height: 200px;
    background-color: gold;
    border-radius: 70px;
    font-family: Impact;
    display: block;
    margin-bottom: 20px;
    margin-left: 20px;
}
.balls:focus{
    background-color: gold;
}
.balls:active{
    background-color: darkgoldenrod;
    width: 220px;
    height: 220px;
}
.shop{
    height: 40px;
    width: 100px;
    margin-left: 65px;
    margin-bottom: 5px;
    border-radius: 100px;
    font-family: Impact;
}
.shop:active{
    background-color: bisque;
}
.saul{
    width: 500px;
}
</style>