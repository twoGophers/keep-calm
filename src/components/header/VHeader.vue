<template>
    <section>
        <div class="header">
            <div class="header-container container">
                <img class="header-logo" src="../../assets/images/header/Logo.svg" alt="Logo.svg">
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
</style>