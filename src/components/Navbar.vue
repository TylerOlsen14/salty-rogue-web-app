<template>
    <div class="navbar">
        <div class="image">
            <img src="../assets/logo.jpg" alt="Salt Rogue Real Estate">
        </div>
        <dir class="button">
            <button type="button" class="btn btn-primary">Primary</button>
        </dir>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.navbar{
    display: flex;
    flex-direction: row;
}
img{
    width: 10%;
    border: 5px fuchsia;
}
.button{
    align-self: flex-end;
}
</style>