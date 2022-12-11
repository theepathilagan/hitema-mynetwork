<template>
    <div id="form">
        <div id="form-title">
            <h2 id="h2-title">Créer un nouveau post</h2>
            <img id="form-image" src="../assets/images/home.png" />
        </div>
        <form id="form-main" @submit.prevent="submit">
            <textarea id="form-textarea" v-model="form.textarea" rows="4" placeholder="Laissez un nouveau post" ></textarea>
            <input id="form-input" v-model="form.image" type="url" placeholder="URL de votre image" />
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
                textarea: '',
                image: ''
            },
            userStore: useUserStore()
        }
    },
    methods: {
        submit() {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    contenu: this.form.textarea,
                    urlImgArticle: this.form.image,
                    like: 3,
                    pseudo: this.userStore.user.pseudo,
                    usrImg: this.userStore.user.image,
                    date: 1649277945051,
                    commentaires: []
                })
            };
            fetch("http://localhost:3000/articles", requestOptions)
        }
    }
}
</script>

<style scoped>

#form {
    width: 99%;
    height: fit-content;
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

#form-textarea {
    width: 97%;
    height: 140px;
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