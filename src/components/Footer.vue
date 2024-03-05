<template>
    <div class="footer">

        <div class="footerFlex">

            <div class="footerBox">
                <img class ="logo_img" src="../../public/img/logo.png" alt="Logo du la république française">
            </div>

            <div class="footerBox">
                <h1 class="footerName">Ministère de la santé et des solidarités</h1>
                <p class="footerText">14, avenue Duquesne 75350 PARIS 07 SP </p>
            </div>

            <div class="footerBox">
                <h1 class="footerName">Contact Info</h1>
                <p class="footerText">Standard : 01 40 56 60 00</p>
            </div>
        </div>

        <div class="right">
            <p class="rightText">Copyright © 2024 (Re)Ssources Relationnelles. Tous les droits réservés</p>
        </div>

    </div>
</template>


<script setup>

</script>

<style scoped>
.footerFlex {
    display: flex;
    flex-direction: column;
    height: auto;
    background: black;
    margin-top: 50px;
}

.footerName {
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 40px;
    color: white;
    margin: 0;
    text-transform: uppercase;
}

.footerName::before {
    content: '';
    width: 24px;
    height: 2px;
    background: #C89446;
    display: block;
    margin-bottom: 0.5rem;
}

.footerText {
    font-weight: 400;
    line-height: 24px;
    color: black;
    margin: 0;
}

.footerBox {
    margin: 15px;
}

.right {
    display: block;
    height: auto;
    padding: 0;
    margin: 0;
    background: black;
}

.right .rightText {
    margin: 0;
    padding: 0;
    color: black;
    text-align: center;
    font-size: 0.75rem;
}

@media only screen and (min-width: 800px) {
    .footerFlex {
        height: auto;
        width: auto;
        display: flex;
        flex-direction: row;
        padding: 0 100px;
        background: white;
        margin-top: 50px;
    }

    .footerName {
        font-weight: 700;
        font-size: 1.2rem;
        line-height: 40px;
        color: black;
        margin: 0;
        text-transform: uppercase;
    }

    .footerName::before {
        content: '';
        width: 24px;
        height: 2px;
        background: #C89446;
        display: block;
        margin-bottom: 0.5rem;
    }

    .footerText {
        font-weight: 400;
        line-height: 24px;
        color: black;
        margin: 0;
    }

    .footerBox {
        width: 33%;
        margin: 25px;
    }

    .right {
        display: block;
        height: auto;
        background: white;
    }

    .right .rightText {
        margin: 0;
        padding: 0;
        color: black;
        padding: 0 125px;
    }

    .logo_img {
        max-width: 200px;
        height: auto;
    }

}</style>