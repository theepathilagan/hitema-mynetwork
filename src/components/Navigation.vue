<template>
    <div v-if="!userStore.user.isLogged" id="nav">
        <div id="nav-item" class="nav-separation">
            <img id="nav-image" src="../assets/images/home.png" />
            <router-link to="/"><h3>Fil d'actualités</h3></router-link>
        </div>
        <div id="nav-item" class="nav-separation">
            <img id="nav-image" src="../assets/images/user.png" />
            <router-link to="/register"><h3>Créer un profil</h3></router-link>
        </div>
        <div id="nav-item">
            <img id="nav-image" src="../assets/images/login.png" />
            <router-link to="/login"><h3>Se connecter</h3></router-link>
        </div>
    </div>
    <div v-else id="nav">
        <div id="nav-item" class="nav-separation">
            <img id="nav-image" src="../assets/images/home.png" />
            <router-link to="/"><h3>Fil d'actualités</h3></router-link>
        </div>
        <div id="nav-item" v-on:click="this.userStore.logout">
            <img id="nav-image" src="../assets/images/logout.png" />
            <h3>Déconnexion</h3>
        </div>
    </div>
</template>

<script>
import {useUserStore} from "../stores/userStore"

export default {
    data() {
        return {
            userStore: useUserStore()
        }
    }
}

</script>

<style scoped>

#nav {
    width: 90%;
    height: fit-content;
    margin-top: 30px;
    border: 1px solid grey;
    display: flex;
    flex-direction: column;
    background-color: #E5E6EB;
    -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
}

#nav-item {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

#nav-image {
    width: 30px;
    height: 30px;
    padding-right: 10px;
}

.nav-separation {
    border-bottom: 1px solid black;
}


</style>