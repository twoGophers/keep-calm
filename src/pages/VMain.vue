<template>
    <div class="main">
        <div class="main-navigation container">
            <router-link to="/" class="main-navigation-lorem">
                LOREM
            </router-link>
            <router-link to="/ipsum" class="main-navigation-ipsum">
                IPSUM
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

export default { 
}
</script>

<style lang="scss">
.main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 13%;
    margin-bottom: 200px;
    .main-navigation {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin-top: 80px;
        margin-bottom: 130px;
        & a {
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 700;
            font-size: 36px;
            line-height: 110%;
            display: flex;
            align-items: center;
            letter-spacing: 0.07em;
            text-transform: uppercase;
            color: #141414;
        }
        .main-navigation-ipsum {
            margin-left: 55px;
        }
    }
}
</style>