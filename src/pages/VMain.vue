<template>
    <div class="main">
        <div class="main-navigation container">
            <router-link to="/" class="main-navigation-lorem main-navigation-link">
                LOREM
            </router-link>
            <router-link to="/ipsum" class="main-navigation-ipsum main-navigation-link">
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
            position: relative;
        }
        .router-link-active::after {
            content: "";
            bottom: 0;
            left: 0;
            position: absolute;
            width: 100%;
            height: 4px;
            background: #141414;
            transition: 0.3s;

            animation: 0.5s show-line-page ease-in-out;
        }

        @keyframes show-line-page {
            from {
                opacity: 0;
                width: 0%;
            }
            to {
                opacity: 1;
                width: 100%;
            }
        }
        .main-navigation-ipsum {
            margin-left: 55px;
        }
    }
}

@media screen and (max-width: 1024px) {
    .main {
        .main-navigation  {
            margin-top: 50px;
            margin-bottom: 80px;
            .main-navigation-link  {
                font-size: 28px;
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .main {
        margin-left: 0rem;
        margin-bottom: 140px;
        .main-navigation  {
            width: auto;
            margin-left: 2rem;
            margin-top: 50px;
            margin-bottom: 80px;
            .main-navigation-link  {
                font-size: 28px;
            }
        }
    }
}

@media screen and (max-width : 480px)  {
    .main {
        margin-bottom: 100px;
    }
    .main .main-navigation {
        margin-left: 1rem;
        margin-bottom: 60px;
        .main-navigation-link {
            font-size: 24px;
        }
    } 
    .main .main-navigation .router-link-active::after {
        height: 3px;
    }
    .main .main-navigation .main-navigation-ipsum {
        margin-left: 25px;
    }
}
</style>