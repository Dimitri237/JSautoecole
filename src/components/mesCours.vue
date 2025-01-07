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
                        <!-- <li><a href="#apropos">À propos</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#tarifs">Tarifs</a></li>
                    <li><a href="#temoignages">Témoignages</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><router-link to="/mesCours">Mes cours</router-link></li> -->
                        <!-- <li v-if="isAuthenticated === true"><a href="#contact">{{ currentUser ?currentUser.username : '' }}</a></li>
                    <li v-if="isAuthenticated === true"><a style="color: red;" @click="logout"><i class="fa fa-power-off"></i></a></li>
                    <li v-if="isAuthenticated === false"><a href="#contact" @click="Login"><i class="fa fa-user"></i> Se connecter</a></li> -->
                    </ul>
                    <div></div>
                </nav>
            </div>
        </header>
        <section class="cours-list">
            <div class="cour-item">
                <h1>Permis moto - catégorie A</h1>
                <div class="line"></div>
                <p>Il existe trois catégories du permis moto : A1, A2 et A. Ces catégories requièrent différents examens
                    et définissent la taille de la cylindrée autorisée à être conduite.</p>
                <button>LIRE</button>
            </div>
            <div class="cour-item">
                <h1>Permis auto - catégorie B</h1>
                <div class="line"></div>
                <p>Le permis B permet de conduire des voitures dont le poids en charge est inférieur à 3,5 tonnes, et
                    qui ne peuvent transporter plus de 8 passagers. Son obtention est soumise à des conditions d’âge, de
                    formation et de réussite à un examen composé du code et d’une épreuve de conduite.</p>
                <button @click="monPermis">LIRE</button>
            </div>
            <!-- <div class="cour-item"></div>
            <div class="cour-item"></div>
            <div class="cour-item"></div>
            <div class="cour-item"></div>
            <div class="cour-item"></div>
            <div class="cour-item"></div>
            <div class="cour-item"></div>
            <div class="cour-item"></div>
            <div class="cour-item"></div>
            <div class="cour-item"></div>
            <div class="cour-item"></div> -->
        </section>
    </div>
    <div class="cours" v-if="permiB">
        <div class="animate__animated animate__fadeInDown">
            <coursPermisB  />
        </div>
       
    </div>
</template>
<script>
import coursPermisB from './permiB.vue'
export default {
    components: {
        coursPermisB
    },
    data() {
        return {
            isMenuActive: false,
            permiB: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuActive = !this.isMenuActive;
        },
        monPermis() {
        this.permiB = true;
    }
    },
   
};
</script>
<style scoped>
.cours {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 40px 0;
    width: 100%;
    left: 0;
    top: 0;
    height: auto;
}

.cours-list {
    display: block;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 20px;
}

.cour-item {
    background: #f9f9f9;
    margin-top: 50px !important;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 60%;
    margin: auto;
    padding: 10px 10%;
    text-align: left;
}

.cour-item button {
    border: none;
    font-size: 15px;
    font-family: 'Times New Roman', Times, serif;
    width: 25%;
    padding: 10px 0;
    background-color: rgb(16, 91, 128);
    color: white;
    font-weight: bold;
    margin-top: 5%;
    border-radius: 50px;
    transition: all 0.3s;
    border: 1px solid rgb(16, 91, 128);

}

.cour-item button:hover {
    border: 1px solid rgb(16, 91, 128);
    color: rgb(16, 91, 128);
    background-color: transparent;

}

.cour-item .line {
    height: 5px;
    width: 10%;
    margin-top: -15px;
    background-color: rgb(16, 91, 128);
}

nav ul li {
    /* display: inline; */
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
    justify-content: space-around;
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
    /* background-color: red; */
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