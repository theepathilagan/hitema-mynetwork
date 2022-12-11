<template>
    <div id="comment">
        <div id="comment-info">
            <div id="comment-info-user">
                <h3 id="h3-title">{{data.pseudo}}</h3>
            </div>
        </div>
        <div id="comment-section">
            <p id="comment-text">{{data.contenu}}</p>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        data: Object
    })
</script>

<style scoped>

#comment {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #31475E;
}

#comment-info {
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
}

#comment-info-user {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
}

#h3-title {
    font-size: 15px;
    font-weight: 600;
    margin-left: 20px;
}

#h4-info {
    font-weight: 500;
    margin-right: 20px;
}

#comment-info-date {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
}

#comment-section {
    width: 100%;
    height: auto;
}

#comment-text {
    padding-left: 20px;
}

</style>