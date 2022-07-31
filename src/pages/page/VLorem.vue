<template>
    <section class="lorem">
        <div class="title">
            <h1>LOREM IPSUM DOLOR<span>sit</span>AMET</h1>
        </div>
        <div class="lorem-block">
            <div class="lorem-content">
                <p class="lorem-content-name">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <p class="lorem-content-text">
                    Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p class="lorem-content-text">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum/ Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                </p>
            </div>
            <div class="lorem-content-img">
                <img src="../../assets/images/img/julia-d-FlNTu2Bj4Dg-unsplash.png" alt="">
            </div>
        </div>
        <div class="lorem-block">
            <div class="lorem-content">
                <p class="lorem-content-name">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <p class="lorem-content-text">
                    Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p class="lorem-content-text">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
            </div>
            <div class="lorem-content-img">
                <img src="../../assets/images/img/taisiia-stupak-viq7xx1boxo-unsplash1.png" alt="">
            </div>
        </div>
    </section>
</template>


<style lang="scss">
.lorem{
    display: flex;
    flex-direction: column;
    .title{
        & h1 {
            font-family: 'Orchidea Pro';
            font-style: normal;
            font-weight: 500;
            font-size: 64px;
            line-height: 110%;
            display: flex;
            align-items: center;
            text-transform: uppercase;
            color: #141414;
        }
        & span {
            font-family: 'Orchidea Pro Medium Italic';
            text-transform: none;
            margin-left: 10px;
            margin-right: 10px;
        }
    }
    .lorem-block {
        margin-top: 70px;
        justify-content: space-between;
        .lorem-content-name{
            font-family: 'Orchidea Pro';
            font-style: normal;
            font-weight: 500;
            font-size: 48px;
            line-height: 110%;
            display: flex;
            align-items: center;
            color: #141414;
            margin-bottom: 20px;
        }
        .lorem-content-text {
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 130%;
            color: #141414;
            margin-bottom: 10px;
        }
        .lorem-content-img {
            & img {
                width: 100%;
            }
        }
    }
    .lorem-block:nth-child(even) {
        display: flex;
        flex-direction: row;
        .lorem-content{
            width: 35%;
        }
        .lorem-content-img {
            width: 55%;
        }
    }
    .lorem-block:nth-child(odd) {
        display: flex;
        flex-direction: row-reverse;
        .lorem-content{
            width: 55%;
        }
        .lorem-content-img {
            width: 35%;
        }
    }
}


@media screen and (max-width : 1400px)  {
    .lorem .title h1 {
        font-size: 54px;
    }
    .lorem .lorem-block .lorem-content-name {
        font-size: 34px;
    }
  }
  @media screen and (max-width : 1024px)  {
    .lorem .title h1 {
        font-size: 42px;
    }
    .lorem .lorem-block:nth-child(even), 
    .lorem .lorem-block:nth-child(odd){
        flex-direction: column;
        margin-top: 50px;
        .lorem-content {
            width: 100%;
            .lorem-content-name {
                font-size: 34px;
            }
            .lorem-content-text {
                font-size: 16px;
            }
        }
        .lorem-content-img {
            width: 100%;
            margin-top: 20px;
        }
    }
  }
  @media screen and (max-width : 768px) {
    .lorem {
        .title {
            margin-left: 2rem;
            h1 {
                font-size: 36px;
                display: flex;
                flex-wrap: wrap;
            }
        } 
    }
    .lorem .lorem-block:nth-child(even), 
    .lorem .lorem-block:nth-child(odd){
        .lorem-content {
            padding-left: 2rem;
            padding-right: 2rem;
            width: 100%;
            .lorem-content-name {
                font-size: 32px;
            }
            .lorem-content-text {
                font-size: 16px;
            }
        }
        .lorem-content-img {
            width: 100%;
        }
    }
  }
  @media screen and (max-width : 480px)  {
    .lorem .title {
        margin-left: 1rem;
        h1 {
            font-size: 30px;
        }
    }
    .lorem  .title h1{
        font-size: 26px;
        & span {
            margin-right: 10px;
            margin-left: 10px;
        }
    }
    .lorem .lorem-block:nth-child(even) .lorem-content, 
    .lorem .lorem-block:nth-child(odd) .lorem-content {
        padding-left: 1rem;
        padding-right: 1rem;
        .lorem-content-name {
            font-size: 24px;
        }
    }
  }

</style>