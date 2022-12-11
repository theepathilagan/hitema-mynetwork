<template>
    <header id="header">
        <div id="header-left">
            <h1>MyNetWork</h1>
            <img id="img-vue" src="../assets/images/logo.png" />
            
        </div>
        <div id="header-right">
            <h2>THEEPATHILAGAN samina</h2>
        </div>
    </header>
</template>

<script setup>

</script>

<style scoped>

#header {
    width: 100%;
    height: 10vh;
    background-color: #E5E6EB;
    display: flex;
    flex-direction: row;
    -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
}

#header-left {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 30px;
}

#header-right {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    padding-right: 10px;
}

#img-vue {
    width: 50px;
    height: 50px;
    margin-left: 10px;
}

</style>