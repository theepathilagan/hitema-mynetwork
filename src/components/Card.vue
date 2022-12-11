<template>
    <div id="card">
        <div id="card-info">
            <div id="card-info-user">
                <h3 id="h3-title">{{ data.pseudo }}</h3>
                <img id="user-image" :src="data.usrImg" />

            </div>
          
        </div>
        <div id="card-image">
            <img id="post-image" :src="data.urlImgArticle" />
        </div>
        <div id="card-description">
            <p id="description">{{ data.contenu }}</p>
        </div>
        <div id="card-comments">
            <div id="card-comments-title">
                <h3 id="h3-title">Commentaires : </h3>
            </div>
            <Comment v-for="comment in data.commentaires" :key="comment.id" :data="comment"></Comment>
        </div>
        <div v-if="userStore.user.isLogged" id="card-comments-add">
            <div id="card-comments-add-title">
                <h3 id="h3-title">Ajouter un commentaire : </h3>
            </div>
            <form id="form-main">
                <textarea id="form-textarea" rows="4" placeholder="Laissez un nouveau commentaire" ></textarea>
                <input id="form-submit" type="submit" />
            </form>
        </div>
    </div>
</template>

<script setup>
    import Comment from './Comment.vue'
    import {useUserStore} from "../stores/userStore"

    const props = defineProps({
        data: Object
    })

    const userStore = useUserStore()
</script>

<style scoped>

#card {
    width: 99%;
    height: auto;
    background-color: #E5E6EB;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
}

#card-info {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
}

#card-info-user {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
}

#h3-title {
    font-size: 30px;
    font-weight: 600;
    margin-left: 20px;
}

#h4-info {
    font-weight: 500;
    margin-right: 20px;
}

#user-image {
    width: 45px;
    height: 45px;
    margin-left: 10px;
}

#card-info-date {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
}

#card-image {
    width: 100%;
    height: 350px;
}

#post-image {
    width: 100%;
    height: 100%;
}

#card-description {
    width: 100%;
    height: auto;
}

#description {
    padding-left: 20px;
}

#card-counters {
    width: 100%;
    height: 50px;
    background-color: #E8E8E8;
}

#card-comments {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
}

#card-comments-title {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
}

#card-comments-add {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
}

#card-comments-add-title {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
}

#form-main {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
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