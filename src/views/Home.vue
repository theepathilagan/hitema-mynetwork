<template>
    <section id="home">
        <div id="home-left">
            <Navigation></Navigation>
        </div>
        <div id="home-right">
            <Suspense>
                <NetworkLine></NetworkLine>
            </Suspense>
        </div>
    </section>
</template>

<script setup>
    import Navigation from "../components/Navigation.vue"
    import NetworkLine from "../components/NetworkLine.vue"
</script>

<style scoped>

#home {
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: row;
}

#home-left {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
}

#home-right {
    width: 75%;
    height: auto;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
}

</style>