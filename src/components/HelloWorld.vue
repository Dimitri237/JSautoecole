<template>
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
            <section id="home" class="hero">
                <h2 class="animate__animated animate__fadeInUp">Confiance <label>.</label> Sécurité <label>.</label>
                    Compétence <br> Réussite</h2>
                <p class="animate__animated animate__fadeInUp">Transformez votre rêve de conduire en réalité avec J & S
                    auto-école : une formation complète, personnalisée et sécurisée pour vous accompagner vers
                    l'indépendance et la réussite sur la route !</p>
                <button v-if="isAuthenticated === false" @click="register">S'inscrire maintenant</button>
            </section>
        </div>
    </header>
    <section id="apropos">
        <h2 style="text-align: center; color: rgb(16, 91, 128);">À Propos</h2>

        <div class="inAbout animate__animated animate__fadeInUp">
            <div class="image-container">
                <img src="./shoot/img19.jpg" alt="Auto-école - Formation à la conduite" class="about-image">
                <div class="overlay">
                    <p>
                        <span>Qui sommes-nous ?</span> <br>
                        Bienvenue chez J&S auto école, votre partenaire de confiance pour apprendre à conduire en
                        toute sécurité et confiance. Fondée en [année de création], notre auto-école s'est engagée à
                        offrir une formation de qualité, adaptée aux besoins de chaque élève.
                    </p>
                </div>
            </div>
        </div>
        <div style="margin-top: 5vh;" class="inAbout animate__animated animate__fadeInUp">
            <div class="image-container">
                <img src="./shoot/img13.jpg" alt="Auto-école - Formation à la conduite" class="about-image">
                <div class="overlay">
                    <p>
                        <span>Nos objectifs</span> <br>
                        Nous proposons des cours théoriques interactifs et des sessions pratiques qui vous préparent non
                        seulement à l'examen du permis de conduire, mais aussi à la conduite quotidienne.
                        Rejoignez-nous chez J&S auto école et commencez votre voyage vers l'indépendance sur la route.
                        Ensemble, faisons de votre rêve de conduire une réalité !
                    </p>
                </div>
            </div>
        </div>
        <h2 style="margin-top: 100px; text-align: center;">Notre Équipe</h2>
        <div class="inAboutP">
            <div class="perso">
                <img src="./shoot/img13.jpg" alt="Dimitri TSAFFO KUETE">
                <div class="text">
                    <h3>TSAFFO KUETE Dimitri</h3>
                    <p>Moniteur de conduite</p>
                    <label>Bonjour, je suis Dimitri, votre moniteur à votre service !</label>
                    <div class="network">
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fas fa-phone-alt"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <div class="perso">
                <img src="./shoot/img14.jpg" alt="Marie NGAH">
                <div class="text">
                    <h3>NGAH Marie</h3>
                    <p>Monitrice de conduite</p>
                    <label>Bonjour, je suis Marie, prête à vous guider sur la route !</label>
                    <div class="network">
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fas fa-phone-alt"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <div class="perso">
                <img src="./shoot/img15.jpg" alt="Jean BIKOR">
                <div class="text">
                    <h3>BIKOR Jean</h3>
                    <p>Moniteur de conduite</p>
                    <label>Bonjour, je suis Jean, passionné par la sécurité routière !</label>
                    <div class="network">
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fas fa-phone-alt"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="services">
        <h2>Nos Services</h2>
        <p>Nous offrons une large gamme de services pour répondre aux besoins de tous les conducteurs.</p>
        <div class="services-list">
            <div class="service-item">
                <h3>Cours de Conduite</h3>
                <ul>
                    <li>Conduite accompagnée : Permet aux élèves de conduire avec un accompagnateur avant d'obtenir leur
                        permis.</li>
                    <li>Leçons individuelles : Cours de conduite personnalisés pour s'adapter au niveau de chaque élève.
                    </li>
                    <li>Conduite en ville et sur autoroute : Formation sur différents types de routes pour une
                        expérience complète.</li>
                </ul>
            </div>
            <div class="service-item">
                <h3>Préparation au Code de la Route</h3>
                <ul>
                    <li>Cours théoriques : Sessions en présentiel ou en ligne pour apprendre les règles de circulation.
                    </li>
                    <li>Tests blancs : Simulations d'examen pour familiariser les élèves avec le format du code.</li>
                    <li>Accès à une plateforme en ligne : Outils d'apprentissage interactifs et quiz pour réviser à
                        domicile.</li>
                </ul>
            </div>
            <div class="service-item">
                <h3>Permis de Conduire</h3>
                <ul>
                    <li>Permis B (voiture) : Formation complète pour obtenir le permis de conduire classique.</li>
                    <li>Permis A (moto) : Cours spécifiques pour les motos légères et lourdes.</li>
                    <li>Permis C (poids lourds) : Formation pour conduire des véhicules de transport de marchandises.
                    </li>
                </ul>
            </div>
            <div class="service-item">
                <h3>Formation à la Conduite Défensive</h3>
                <ul>
                    <li>Sensibilisation aux dangers de la route : Techniques pour anticiper et éviter les accidents.
                    </li>
                    <li>Gestion des situations d'urgence : Formation sur la réaction appropriée en cas de situation
                        critique.</li>
                </ul>
            </div>
            <div class="service-item">
                <h3>Stages de Récupération de Points</h3>
                <ul>
                    <li>Stages de sensibilisation à la sécurité routière : Cours pour récupérer des points de permis
                        perdus.</li>
                    <li>Formation sur les comportements à risque : Sensibilisation aux comportements qui entraînent des
                        pertes de points.</li>
                </ul>
            </div>
            <div class="service-item">
                <h3>Formation pour Conducteurs Expérimentés</h3>
                <ul>
                    <li>Perfectionnement de la conduite : Cours pour améliorer les compétences de conduite des
                        conducteurs déjà titulaires d'un permis.</li>
                    <li>Conduite en conditions difficiles : Formation sur la conduite par temps de pluie, neige, ou dans
                        des situations de circulation dense.</li>
                </ul>
            </div>
            <div class="service-item">
                <h3>Services Additionnels</h3>
                <ul>
                    <li>Location de véhicules : Mise à disposition de véhicules pour les élèves souhaitant pratiquer en
                        dehors des leçons.</li>
                    <li>Assistance à l'examen : Accompagnement des élèves le jour de l'examen pratique.</li>
                    <li>Suivi personnalisé : Évaluation régulière des progrès de l'élève et ajustement des leçons en
                        conséquence.</li>
                </ul>
            </div>
            <div class="service-item">
                <h3>Formations Spécifiques</h3>
                <ul>
                    <li>Conduite écologique : Sensibilisation aux techniques de conduite économes en carburant et
                        respectueuses de l'environnement.</li>
                    <li>Conduite pour les personnes handicapées : Adaptation des leçons pour les élèves ayant des
                        besoins spécifiques.</li>
                </ul>
            </div>
            <div class="service-item">
                <h3>Évaluation et Bilan de Compétences</h3>
                <ul>
                    <li>Bilan de conduite : Évaluation des compétences de conduite pour déterminer les points à
                        améliorer.</li>
                    <li>Conseils personnalisés : Recommandations sur les leçons à suivre en fonction des résultats de
                        l'évaluation.</li>
                </ul>
            </div>
        </div>
    </section>

    <section id="tarifs">
        <h2>Tarifs</h2>
        <p style="width: 90%; margin: auto;">Découvrez nos tarifs compétitifs pour toutes nos formations :</p>
        <ul class="tarifs-list">
            <li>Cours de conduite (1 heure) : 30 000 FCFA</li>
            <li>Formation accélérée (permis B) : 600 000 FCFA</li>
            <li>Préparation au code de la route : 50 000 FCFA</li>
            <li>Tests blancs : 10 000 FCFA par séance</li>
            <li>Permis A (moto) : 400 000 FCFA</li>
            <li>Permis C (poids lourds) : 800 000 FCFA</li>
            <li>Formation à la conduite défensive : 70 000 FCFA</li>
            <li>Stage de récupération de points : 100 000 FCFA</li>
            <li>Suivi personnalisé : 20 000 FCFA par séance</li>
            <li>Location de véhicule (par heure) : 15 000 FCFA</li>
        </ul>
    </section>

    <section id="temoignages">
        <h2>Témoignages</h2>
        <blockquote>
            "Une expérience incroyable ! Je recommande vivement." - Jean P.
        </blockquote>
    </section>

    <section id="contact" class="contact-section">
        <h2>Contactez-nous</h2>
        <form class="contact-form">
            <label for="name">Nom :</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email :</label>
            <input type="email" id="email" name="email" required>

            <label for="message">Message :</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Envoyer</button>
        </form>
    </section>

    <footer class="footer">
        <div class="footer-content">
            <p>&copy; 2024 Auto-école J & S. Tous droits réservés.</p>

            <ul class="footer-nav">
                <li><a href="#home">Accueil</a></li>
                <li><a href="#apropos">À propos</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#tarifs">Tarifs</a></li>
                <li><a href="#temoignages">Témoignages</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div class="social-links">
                <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
    </footer>
</template>


<script>
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/config/firebaseConfig';
export default {
    components: {
    },
    data() {
        return {
            isMenuActive: false,
            isAuthenticated: false,
            currentUser: null,
        };
    },
    mounted() {
        this.fetchCurrentUser();
    },
    created() {
        // Récupérer les informations d'authentification depuis le localStorage
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        const userId = localStorage.getItem('userId');

        // Mettre à jour les données du composant avec les informations récupérées
        this.isAuthenticated = isAuthenticated === 'true';
        this.userId = userId;

        if (this.isAuthenticated) {
            // Récupérer les véhicules associés à l'ID de l'utilisateur
            this.fetchCurrentUser();
        }
    },
    methods: {
        logout() {
            // Supprimer les informations de connexion de localStorage
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('userId');

            // Réinitialiser les variables de l'état de connexion
            this.isAuthenticated = false;
            this.userId = null;

            // Rediriger l'utilisateur vers la page de connexion
            this.$router.push("/");
            this.isMenuActive = false;
        },
        async fetchCurrentUser() {
            const userId = localStorage.getItem('userId'); // Récupérer l'ID de l'utilisateur connecté depuis le localStorage

            const usersRef = collection(db, 'USERS');
            const queryRef = query(usersRef, where('_id', '==', userId));

            try {
                const querySnapshot = await getDocs(queryRef);
                if (!querySnapshot.empty) {
                    this.currentUser = querySnapshot.docs[0].data();
                }
            } catch (error) {
                console.error('Erreur lors de la récupération de l\'utilisateur connecté :', error);
            }
        },
        toggleMenu() {
            this.isMenuActive = !this.isMenuActive;
        },
        Login() {
            this.$router.push("./auth")
        },
        register() {
            this.$router.push("./CreateAccount")
        }
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}


header {
    background: url('./shoot/img8.jpg') no-repeat center center/cover;
    color: white;
    /* padding: 20px 0; */
    text-align: center;
    height: 100vh;
    width: 100%;
}

.sect {
    background-color: rgba(0, 0, 0, 0.3);
    height: 100vh;
    width: 100%;
}

nav {
    top: 0;
    bottom: 0;
    background-color: white;
    position: fixed;
    z-index: 999;
    height: 8vh;
    width: 100%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

nav ul {
    list-style: none;
    padding: 25px 0;

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

nav ul li a:hover {
    color: rgba(28, 30, 31, 0.644);
    /* Couleur au survol */
}

.hero {
    color: white;
    text-align: center;
    width: 100%;
    background-color: transparent;
}

.hero button {
    color: white;
    text-align: center;
    font-size: 25px;
    background-color: rgba(16, 91, 128, 0.9);
    border: none;
    padding: 10px 10px;
    border-radius: 5px;
    transition: all 0.5s;
    margin-top: 3%;
}

.hero button:hover {
    color: rgba(16, 91, 128, 0.9);
    background-color: white;
}

.hero h2 {
    font-size: 5em;
    font-family: roboto, sans-serif;
    color: white;
    padding-top: 5% !important;
    width: 95%;
    margin: auto;
    font-weight: bold;
}

.hero h2 label {
    color: rgb(16, 91, 128);
    border-radius: 50%;
    width: 15px;
    height: 15px;

    font-weight: 900;
}

.hero p {
    font-size: 1.8em;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.973);
    width: 80%;
    margin: auto;
}

section {
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    padding: 100px 0;
}

section h2 {
    font-size: 2.5em;
    font-family: sans-serif;
    color: rgb(16, 91, 128);
    width: 80%;
    margin: auto;
    font-weight: 800;
}

.inAbout {
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
}

.inAboutP {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 40px;
}

.perso {
    background: #f9f9f9;
    margin: 15px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 30%;
    /* Adjust this for smaller screens */
    text-align: center;
}

.perso img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.network {
    padding-top: 15px;
}

.network a {
    margin: 0 10px;
    color: rgb(16, 91, 128);
    font-size: 20px;
    transition: color 0.3s;
}

.network a:hover {
    color: rgb(16, 91, 128);
    /* Change to a hover color */
}

@media (max-width: 768px) {
    .perso {
        width: 90%;
        /* Full width on smaller screens */
    }
    .perso img {
    width: 500px;
    height: 500px;
}
}

h2 {
    color: #007BFF;
    margin-bottom: 15px;
}

ul {
    list-style: none;
    padding-left: 20px;
}

form {
    display: flex;
    flex-direction: column;
}

form label {
    margin: 10px 0 5px;
}

form input,
form textarea {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: border 0.3s;
}

form input:focus,
form textarea:focus {
    border-color: #007BFF;
}

form button {
    padding: 10px;
    background: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    transition: background 0.3s;
}

form button:hover {
    background: #0056b3;
}

blockquote {
    border-left: 4px solid #007BFF;
    margin: 20px 0;
    padding-left: 20px;
    font-style: italic;
    color: #555;
}

footer {
    text-align: center;
    padding: 20px 0;
    background: #f1f1f1;
    margin-top: 20px;
    font-size: 0.9em;
}

/* Existing styles ... */

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

.tarifs-list {
    list-style-type: none;
    padding-left: 0;
    margin-top: 10px;
}

.tarifs-list li {
    background: #f9f9f9;
    margin-top: 10px !important;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    font-size: 1.2em;
    width: 95%;
    margin: auto;
}

.inAbout {
    display: flex;
    flex-direction: column;
    /* Stack items vertically */
    align-items: center;
    /* Center horizontally */
    margin: 20px;
}

.image-container {
    position: relative;
    width: 100%;
    /* Full width */
    max-width: 800px;
    /* Max width for larger screens */
    margin: auto;
    /* Center the container */
}

.about-image {
    width: 100%;
    /* Responsive image */
    height: auto;
    /* Maintain aspect ratio */
    border-radius: 10px;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    /* Semi-transparent background */
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
}

.overlay p {
    text-align: center;
    margin: 0;
    font-size: 1.1em;
}

.overlay span {
    font-weight: bold;
    font-size: 1.5em;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .inAbout {
        margin: 10px;
        /* Adjust margin for smaller screens */
    }

    .overlay p {
        font-size: 1em;
        /* Adjust text size for smaller screens */
    }

    .overlay span {
        font-size: 1.2em;
        /* Adjust title size for smaller screens */
    }
}

.contact-section {
    background-color: #f7f9fc;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: auto;
    margin-top: 10vh !important;
    text-align: center;
}

.contact-section h2 {
    color: rgb(16, 91, 128);
    margin-bottom: 20px;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    /* Spacing between fields */
}

.contact-form label {
    font-weight: bold;
    text-align: left;
}

.contact-form input,
.contact-form textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
    transition: border-color 0.3s;
}

.contact-form input:focus,
.contact-form textarea:focus {
    border-color: rgb(16, 91, 128);
    outline: none;
}

.contact-form button {
    padding: 10px;
    background-color: rgb(16, 91, 128);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 1em;
}

.contact-form button:hover {
    background-color: #0056b3;
    /* Darker shade on hover */
}

.footer {
    background-color: rgb(16, 91, 128);
    color: white;
    padding: 20px 0;
    text-align: center;
}

.footer-content {
    max-width: 800px;
    margin: auto;
}

.footer-content p {
    margin: 0;
    font-size: 1em;
}

.footer-nav {
    list-style-type: none;
    padding: 0;
    margin: 15px 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    /* Wrap items on smaller screens */
}

.footer-nav li {
    margin: 0 15px;
}

.footer-nav a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-nav a:hover {
    color: #f0f0f0;
    /* Lighter shade on hover */
}

.social-links {
    margin-top: 10px;
}

.social-links a {
    color: white;
    margin: 0 15px;
    font-size: 1.5em;
    transition: color 0.3s;
}

.social-links a:hover {
    color: #f0f0f0;
    /* Lighter shade on hover */
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

/* Responsive styles */
@media (max-width: 768px) {
    .hero h2 {
        font-size: 2em;
        /* Smaller font size for headings */
    }

    .hero p {
        font-size: 1em;
        /* Smaller font size for paragraph */
    }

    .hero button {
        font-size: 1.5em;
        /* Smaller button text */
        padding: 15px 16px;
        /* Adjust padding for smaller screens */
        margin-top: 10vh;
    }
}

/* Add additional breakpoints as needed */
</style>
