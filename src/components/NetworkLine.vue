<template>
    <div id="netline">
        <PostForm v-if="userStore.user.isLogged"></PostForm>
        <Card v-for="article in articles" :key="article.id" :data="article"></Card>
    </div>
</template>

<script setup>
import Card from "../components/Card.vue"
import PostForm from "../components/PostForm.vue"
import {useUserStore} from "../stores/userStore"

const articles = await fetch(`http://localhost:3000/articles`).then((r) => r.json())
const userStore = useUserStore()
</script>

<style scoped>
#netline {
    width: 95%;
    height: auto;
    margin-top: 30px;
    margin-bottom: 10px;
    /*border-radius: 10px;*/

}

</style>