<template>

    <header class="header">

        <div class="topbar">

            <div class="logo">
                <router-link to="/" class="logoLink">Ecole de Parapente du menez hom</router-link>
            </div>

            <nav class="menu">
                <router-link to="/stagesemaine" class="menuItem">Stage Semaine</router-link>
                <router-link to="/" class="menuItem">Stage Week-end</router-link>
                <router-link to="/" class="menuItem">Pente École</router-link>
                <router-link to="/" class="menuItem menuButton">Réservation</router-link>
            </nav>

        </div>

        <div class="baseline">
            <div class="baselineWelcome">Bienvenue</div>
            <strong class="baselineName">École de parapente</strong>
            <div class="baselineSlogan">du menez hom</div>
        </div>

    </header>

</template>


<script setup>

</script>

<style scoped>
.header {
    background: 
        linear-gradient(180deg, rgba(0, 0, 0, 0.9),rgba(54, 54, 54, 0.5) 60%, rgba(28, 28, 28, 0.4)),
        url(../../public/img/background_header.jpg) center center / cover no-repeat;
        color: #FFF;
}

.topbar {
    font-size: 0.875rem;
    text-transform: uppercase;
    text-align: center;
    padding: 15px 30px;
    height: 50px;
}
.topbar a:hover {
    color: #C89446;
}

.header .topbar .logo {
    margin-bottom: 20px;
}
.menuItem {
    display: inline-block;
    padding: 0 15px;
}
.menu .menuButton {
    border: solid 1px #C89446;
    border-radius: 3px;
    padding: 5px 20px;
    transition-property: color, background-color;
    margin-top: 5px;
}
.menu .menuButton:hover {
    color: #FFF;
    background: #C89446;
}
.baseline {
    padding: 50px 0 70px 0;
    text-align: center;
}

.baseline .baselineWelcome {
    font-size: 3.5rem;
    font-family: serif;
    color: #C89446;
    font-weight: 400;
    line-height: 1;
}
.baseline .baselineName {
    font-size: 2.5rem;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 4px;
    color: #FFF;
    line-height: 1;
}

.baseline .baselineSlogan {
    font-size: 2rem;
    color: #FFF;
    text-transform: uppercase;
    letter-spacing: 4px;
    font-weight: 300;
}

@media only screen and (min-width: 900px) {
    html {
        font-size: 16px;
    }
    .header .topbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1150px;
        margin: 0 auto;
    }
    .header .topbar .logo {
        margin-bottom: 0;
    }
    .baseline {
        padding: 120px 0 230px;
    }
    .baseline .baselineSlogan {
        font-size: 1.5rem;
        line-height: 3,125rem;
    }

    .baseline .baselineName {
        font-size: 4.375rem;
        letter-spacing: 11px;
        line-height: 5.5rem;
        letter-spacing: 12px;
    }

    .baseline .baselineWelcome {
        font-size: 3.75rem;
        line-height: 1,875rem;
        letter-spacing: 4px;
    }
    .menu .menuButton {
        border: solid 1px #C89446;
        padding: 10px 40px;
        margin-left: 20px;
    }       
}
</style>