<template>
    <div>
        <header>
        <div class="sect">
            <nav class="navbar">
                <div class="navbar-brand">Auto-école J&S</div>
                <div class="navbar-toggle" @click="toggleMenu">
                    <span class="toggle-icon"></span>
                    <span class="toggle-icon"></span>
                    <span class="toggle-icon"></span>
                </div>
                <ul class="navbar-menu" :class="{ active: isMenuActive }">
                    <li><a href="#home">Accueil</a></li>
                    <li><a href="#apropos">À propos</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#tarifs">Tarifs</a></li>
                    <li><a href="#temoignages">Témoignages</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><router-link to="/mesCours">Mes cours</router-link></li>
                    <!-- <li v-if="isAuthenticated === true"><a href="#contact">{{ currentUser ?currentUser.username : '' }}</a></li>
                    <li v-if="isAuthenticated === true"><a style="color: red;" @click="logout"><i class="fa fa-power-off"></i></a></li>
                    <li v-if="isAuthenticated === false"><a href="#contact" @click="Login"><i class="fa fa-user"></i> Se connecter</a></li> -->
                </ul>
            </nav>
        </div>
    </header>
    <section class="cours-list">
        <div class="cour-item"></div>
        <div class="cour-item"></div>
        <div class="cour-item"></div>
        <div class="cour-item"></div>
        <div class="cour-item"></div>
        <div class="cour-item"></div>
        <div class="cour-item"></div>
        <div class="cour-item"></div>
        <div class="cour-item"></div>
        <div class="cour-item"></div>
        <div class="cour-item"></div>
        <div class="cour-item"></div>
    </section>
    </div>
</template>
<script>
export default {
    components: {
    },
    data() {
        return {
            isMenuActive: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuActive = !this.isMenuActive;
        },
    },
};
</script>
<style scoped>

.cours-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 20px;
}

.cour-item {
    background: #f9f9f9;
    margin: 10px;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 30%;
    border-radius: 10px;
    height: 15vh;
    /* Adjust based on screen size */
}
nav ul li {
    display: inline;
    margin: 0 10px;
}

nav ul li a {
    color: rgb(16, 91, 128);
    text-decoration: none;
    font-weight: 700;
    font-size: 20px;
    transition: color 0.3s;
}
@media (max-width: 768px) {
    nav ul {
        flex-direction: column;
        padding: 10px;
    }

    .inAbout,
    .inAboutP {
        flex-direction: column;
        align-items: center;
    }

    .inAboutP .perso {
        width: 90%;
        margin-bottom: 20px;
        flex-direction: column;
        align-items: center;
    }

    .inAboutP .perso img {
        width: 250px;
        height: 250px;
    }

    .hero h2 {
        font-size: 3em;
    }

    .hero p {
        font-size: 1.5em;
    }

    section h2 {
        font-size: 2em;
    }

    form button {
        font-size: 0.9em;
    }
}

.services-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 20px;
}

.service-item {
    background: #f9f9f9;
    margin: 10px;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 30%;
    /* Adjust based on screen size */
}

.service-item h3 {
    color: rgb(16, 91, 128);
    margin-bottom: 10px;
    text-align: left;
    padding-left: 20px;
}

.service-item ul {
    list-style: none;
    text-align: left;
}

@media (max-width: 768px) {
    .service-item {
        width: 90%;
    }
}

.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(16, 91, 128);
    padding: 10px 20px;
}

.navbar-brand {
    color: white;
    font-size: 1.5em;
    font-weight: bold;
}

.navbar-menu {
    list-style-type: none;
    display: flex;
    gap: 20px;
    /* Spacing between items */
    margin: 0;
    padding: 0;
}

.navbar-menu li {
    display: inline;
}

.navbar-menu a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.navbar-menu a:hover {
    color: #f0f0f0;
    /* Lighter shade on hover */
}

.navbar-toggle {
    display: none;
    /* Hidden by default */
    flex-direction: column;
    cursor: pointer;
}

.toggle-icon {
    height: 3px;
    width: 25px;
    background-color: white;
    margin: 3px 0;
}

/* Responsive styles */
@media (max-width: 768px) {
    .navbar-menu {
        display: none;
        /* Hide the menu by default */
        flex-direction: column;
        /* Stack items vertically */
        position: absolute;
        top: 60px;
        /* Position below the navbar */
        left: 0;
        background-color: rgb(16, 91, 128);
        width: 100%;
        padding: 10px 0;
    }

    .navbar-menu.active {
        display: flex;
        /* Show menu when active */
    }

    .navbar-toggle {
        display: flex;
        /* Show the toggle button */
    }
}

</style>