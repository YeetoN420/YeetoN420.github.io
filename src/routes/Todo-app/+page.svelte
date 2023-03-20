<script>
    function remove(index) {
        todoArr.splice(index, 1);
        todoArr = todoArr;
    }

    let todoArr = [];
    function newElement() {
        var InputValue = document.getElementById("new-task").value;
      
        if (InputValue === "") {
            alert("You must write a task first!");
            return;
        } 

        todoArr.push(InputValue);
        todoArr = todoArr;
        document.getElementById("new-task").value = "";
    }
</script>

<h1>TODO APP</h1>
<hr />
<input class="listInput" type="text" id="new-task" name="tasks" placeholder="Write something you want todo..."/>
<center><button class="submitButton" type="button" on:click={() => newElement()}>Add To List</button></center>

{#each todoArr as obj, i}
    <div class="todothing">
        <div>
            <input type="radio" />
            {obj}
        </div>
        <img alt src="/Trasch_can.png" class="removeButton" type="button" on:click={() => remove(i)}/>
    </div>
{/each}

<style>
    :global(body) {
        background: linear-gradient(
            180deg,
            rgba(131, 58, 180, 1) 0%,
            rgba(253, 29, 29, 1) 50%,
            rgba(252, 176, 69, 1) 100%
        );
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 1080px;
    }

    .todothing {
        border-color: black;
        background-color: white;
        border: solid;
        border-width: 2px;
        padding-left: 10px;
        padding-top: 10px;
        font-size: 20px;
        text-align: 700px;
        margin-left: 500px;
        margin-right: 500px;
        margin-top: 10px;
        min-height: 2em;
        display: inline-block;
        display: flex;
        justify-content: space-between;
    }

    hr {
        border-color: black;
    }

    h1 {
        text-align: center;
    }

    .removeButton {
        margin-bottom: 10px;
        margin-right: 3px;
        min-height: 35px;
        max-width: 40px;
    }

    .submitButton {
        margin-top: 20px;
        margin-bottom: 20px;
        height: 35px;
        width: 120px;
        font-size: 20px;
        border-color: black;
        border-width: 3px;
    }

    .submitButton:active {
        background-color: grey;
    }

    .listInput {
        align-items: center;
        display: block;
        width: 35%;
        min-height: 3vh;
        max-height: 3em;
        margin: auto;
        margin-top: 25px;
        border-color: black;
        border-width: 3px;
        font-size: 30px;
    }
</style>
