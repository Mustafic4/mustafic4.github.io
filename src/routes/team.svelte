<script>
    let counter = 0;

    function increment(){
        counter = counter + 1;
    }
</script>

<div class="main">
    <p>Team {counter}</p>
</div>

<button on:click={increment}>Přidat</button>

<style lang="scss">
.main {
    p {
        color: green;
    }
}
</style>