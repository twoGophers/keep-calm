<template>
    <section>
        <div class="header">
            <div class="header-container container">
                <img class="header-logo" src="../../assets/images/header/Logo.svg" alt="Logo.svg">
                <img class="header-phone-img" src="../../assets/images/header/phone.svg" alt="phone.svg">
                <span class="header-phone">+7 (495) 495-49-54</span>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@import url('../../assets/style/Сonstantly.scss');
.header {
    background: linear-gradient(0deg, #464341 0%, #010101 100%);
    height: 100px;
    display: flex;
    align-items: center;
    .header-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 80%;
        margin-left: 13%;
        .header-phone-img {
            display: none;
        }
        .header-phone {
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 33px;
            display: flex;
            align-items: center;
            text-align: center;
            color: #FFFFFF;
        }
    }
}

@media screen and (max-width: 768px) {
    .header .header-container{
        margin-right: 2rem;
        margin-left: 2rem;
        width: 100%;
        .header-logo {
            width: 12rem;
        }
        .header-phone {
            font-size: 22px;
        }
    }
}

@media screen and (max-width : 480px)  {
    .header .header-container{
        margin-right: 1rem;
        margin-left: 1rem;
        width: 100%;
        .header-logo {
            width: 10rem;
        }
        .header-phone {
            display: none;
        }
        .header-phone-img {
            display: block;
            width: 1.3rem;
        }
    }
}
</style>