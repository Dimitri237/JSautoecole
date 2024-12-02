<template>
    <header>
        <div class="sect">
            <nav>
                <ul>
                    <li><a href="#home">Accueil</a></li>
                    <li><a href="#apropos">A propos</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#tarifs">Tarifs</a></li>
                    <li><a href="#temoignages">Témoignages</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <section id="home" class="hero">
                <h2 class="animate__animated animate__fadeInUp">Confiance <label>.</label> Sécurité <label>.</label>
                    Compétence <br> Réussite</h2>
                <p class="animate__animated animate__fadeInUp">Transformez votre rêve de conduire en réalité avec J & S
                    auto-école : une formation complète, personnalisée et sécurisée pour vous accompagner vers
                    l'indépendance et la réussite sur la route !</p>
                <button>S'inscrire maintenant</button>
            </section>
        </div>
    </header>
    <section id="apropos">
        <h2>A Propos</h2>
        <div class="inAbout animate__animated animate__fadeInUp">
            <img src="./shoot/img19.jpg" alt="">
            <p> <span>Qui sommes nous?</span> <br> Bienvenue chez [Nom de l'auto-école], votre partenaire de confiance
                pour apprendre à conduire en toute
                sécurité et confiance. Fondée en [année de création], notre auto-école s'est engagée à offrir une
                formation
                de qualité, adaptée aux besoins de chaque élève.
                Chez [Nom de l'auto-école], nous mettons l'accent sur la sécurité, la responsabilité et la confiance au
                volant. Nos véhicules modernes et bien entretenus sont équipés des dernières technologies pour vous
                offrir
                une expérience d'apprentissage optimale.</p>
        </div>
        <div class="inAbout">

            <p style="padding: 9% 0;"> <span>Nos objectifs</span> <br> De plus, nous proposons des cours théoriques interactifs et des
                sessions pratiques qui vous préparent non seulement à l'examen du permis de conduire, mais aussi à la
                conduite quotidienne.
                Rejoignez-nous chez [Nom de l'auto-école] et commencez votre voyage vers l'indépendance sur la route.
                Ensemble, faisons de votre rêve de conduire une réalité !</p>
            <img src="./shoot/img13.jpg" alt="">
        </div>
        <h2 style="margin-top: 100px">Notre Equipe</h2>
        <div class="inAboutP">
            <div class="perso">
                <img src="./shoot/img13.jpg" alt="">
                <div class="text">
                    <h3>TSAFFO KUETE Dimitri</h3>
                    <p>Moniteur</p>
                    <label>Bonjour moi c'est Dimitri jeune moniteur a votre service</label>
                    <div class="network">
                        <i class="fab fa-twitter"></i>
                        <i class="fas fa-phone-alt"></i>
                        <i class="fab fa-linkedin-in"></i>
                    </div>
                </div>
            </div>
            <div class="perso">
                <img src="./shoot/img13.jpg" alt="">
                <div class="text">
                    <h3>TSAFFO KUETE Dimitri</h3>
                    <p>Moniteur</p>
                    <label>Bonjour moi c'est Dimitri jeune moniteur a votre service</label>
                    <div class="network">
                        <i class="fab fa-twitter"></i>
                        <i class="fas fa-phone-alt"></i>
                        <i class="fab fa-linkedin-in"></i>
                    </div>
                </div>
            </div>
            <div class="perso">
                <img src="./shoot/img13.jpg" alt="">
                <div class="text">
                    <h3>TSAFFO KUETE Dimitri</h3>
                    <p>Moniteur</p>
                    <label>Bonjour moi c'est Dimitri jeune moniteur a votre service</label>
                    <div class="network">
                        <i class="fab fa-twitter"></i>
                        <i class="fas fa-phone-alt"></i>
                        <i class="fab fa-linkedin-in"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="services">
        <h2>Nos Services</h2>
        <p>Nous offrons des cours de conduite adaptés à tous les niveaux.</p>
    </section>

    <section id="tarifs">
        <h2>Tarifs</h2>
        <ul>
            <li>Cours de conduite : 50€/heure</li>
            <li>Formation accélérée : 900€</li>
        </ul>
    </section>

    <section id="temoignages">
        <h2>Témoignages</h2>
        <blockquote>
            "Une expérience incroyable ! Je recommande vivement." - Jean P.
        </blockquote>
    </section>

    <section id="contact">
        <h2>Contactez-nous</h2>
        <form>
            <label for="name">Nom :</label>
            <input type="text" id="name" name="name" required>
            <label for="email">Email :</label>
            <input type="email" id="email" name="email" required>
            <label for="message">Message :</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Envoyer</button>
        </form>
    </section>

    <footer>
        <p>&copy; 2024 Auto-école Exemple. Tous droits réservés.</p>
    </footer>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    }
}
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
    margin: 0 20px;
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
    font-size: 40px;
    background-color: rgba(16, 91, 128, 0.9);
    border: none;
    padding: 20px 10px;
    border-radius: 5px;
    transition: all 0.5s;
    margin-top: 5%;
}

.hero button:hover {
    color: rgba(16, 91, 128, 0.9);
    background-color: white;
}

.hero h2 {
    font-size: 5em;
    font-family: roboto, sans-serif;
    color: white;
    padding-top: 15% !important;
    width: 80%;
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
    /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); */
}

.inAboutP {
    width: 75%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); */
}

.inAboutP .perso {
    width: 30%;
    display: flex;
    justify-content: space-between;
}

.inAboutP .perso img {
    width: 45%;
    height: 210px;
    border-radius: 50%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}

.inAboutP .perso .text {
    width: 48%;
    text-align: left;
    padding: 5% 0;
}

.inAboutP .perso h3 {
    font-size: 20px;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
}

.inAboutP .perso p {
    font-size: 15px;
    font-weight: bold;
    color: rgb(0, 0, 0, 0.7);
}

.inAboutP .perso label {
    font-size: 15px;
    font-weight: 100;
    color: rgb(0, 0, 0, 0.4);
    padding-top: 30px;
}

.inAbout img {
    width: 50%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.network {
    padding-top: 25px;
    width: 80%;
    display: flex;
    justify-content: space-between;
}

.network i {
    font-size: 20px;
    color: rgb(16, 91, 128);
    padding: 10px;
    border-radius: 50%;
    border: 1px solid rgb(16, 91, 128);
}

.inAbout p {
    width: 45%;
    font-size: 30px;
    text-align: left;
    color: rgba(0, 0, 0, 0.7);
    padding: 5% 0;
}

.inAbout p span {
    font-size: 35px;
    text-align: left;
    color: rgb(16, 91, 128);
    font-weight: bold;
    padding-bottom: 15px;
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
</style>
