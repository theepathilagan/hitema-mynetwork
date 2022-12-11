<template>
    <div id="form">
        <div id="form-title">
            <h2 id="h2-title">Se connecter</h2>
            <img id="form-image" src="../assets/images/login.png" />
        </div>
        <form id="form-main" @submit.prevent="submit">
            <input id="form-input" type="email" v-model="form.email" placeholder="votre@email.fr" />
            <input id="form-input" type="password" v-model="form.password" placeholder="password" />
            <input id="form-submit" type="submit" />
        </form>
    </div>
</template>

<script>
import {useUserStore} from "../stores/userStore"

export default {
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            userStore: useUserStore()
        }
    },
    methods: {
        submit() {
            const params = {
                email: this.form.email,
                password: this.form.password
            }
            this.userStore.login(params)
            this.$router.replace({ name: 'Home' })
            console.log(this.userStore.user)
        }
    }
}

</script>

<style scoped>

#form {
    width: 95%;
    height: fit-content;
    margin-top: 30px;
    margin-bottom: 10px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    background-color: #E5E6EB;
    -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
}

#form-title {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
}

#h2-title {
    font-size: 30px;
    margin-left: 20px;
}

#form-image {
    width: 50px;
    height: 50px;
    padding-left: 20px;
}

#form-main {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
}

#form-input {
    width: 97%;
    height: 35px;
    margin-bottom: 30px;
    border-radius: 5px;
    border: 1px solid grey;
    padding-left: 10px;
    font-size: 15px;
    font-weight: 600;
}

#form-submit {
    width: 20%;
    height: 35px;
    border-radius: 5px;
    border: 1px solid black;
    font-size: 15px;
    font-weight: 600;
    background-color: green;
    color: white;
    cursor: pointer;
    margin-bottom: 20px;
}

</style>