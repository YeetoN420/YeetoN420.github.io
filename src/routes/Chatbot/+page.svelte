<script>
    import { enhance } from "$app/forms";
    import "elizabot";
    import ElizaBot from "elizabot";
    import "@picocss/pico";

    let eliza = new ElizaBot();
    let chat = [{ user: "eliza", text: eliza.getInitial() }];
    let inputs = [];

    async function write() {
        let InputValue = document.getElementById("new-message").value;
      
        if (InputValue === "") {
            alert("You must write a message first!");
            return;
        } 

        await new Promise((r) => setTimeout(r, 500 + Math.random() * 500));

        chat.unshift({user: "you", text: InputValue})
        chat.unshift({ user: "eliza", text: eliza.transform(InputValue)})
        
        inputs.unshift(InputValue);
        chat = chat;
        document.getElementById("new-message").value = "";
    }
      // TODO: yeet in the new message
      // random delay for writing

      // TODO: write the text
    


  </script>
  
  
  <svelte:head>
    <link rel="stylesheet" href="/pico.min.css" />
    <style>
      nav {
        margin-left: 10%;
        margin-right: 10%;
      }
    </style>
  </svelte:head>
  
  <div class="container">
    <center><h1>Chat with Elizabot</h1></center>
    <div class="scrollable">

      
    </div>
    <form
      method="post"
      use:enhance={({ form, data, action, cancel }) => {
        /* https://kit.svelte.dev/docs/form-actions#progressive-enhancement */
        cancel();
        const text = data.get("text");
        write(text);
        
        
        
        form.reset()
      }}
    >
      <input type="text" name="text"  id="new-message"/>

      <button class="submitButton" type="button" on:click={() => write()}>Done</button>

    </form>

    {#each chat as message}
    <article>
      <span>
        {message.text}
      </span>
    </article>
    {/each}

  </div>