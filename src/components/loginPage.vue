<template>
    <div class="auth-container">
      <h2>Connexion</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Mot de passe</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Se connecter</button>
        <p>Pas encore de compte ? <router-link to="/CreateAccount">Inscrivez-vous</router-link></p>
      </form>
      <p><router-link style="color: rgba(0, 0, 0, 0.7); text-decoration: none; font-weight: bold; font-size: 20px;" to="/">Acceuil</router-link></p>
    </div>
  </template>
  <script>
  import { firestore } from '@/config/firebaseConfig';
  import { getDocs, collection, query, where, } from 'firebase/firestore';
  
  export default {
    data() {
      return {
        email: "",
        password: "",
        loading: false,
        isAuthenticated: false,
        userId: null
      };
    },
  
    methods: {
      async login() {
        this.loading = true;
  
        // Recherche de l'utilisateur correspondant à l'email fourni dans Firestore
        const usersRef = collection(firestore, 'USERS');
        const q = query(usersRef, where('email', '==', this.email));
  
        try {
          const querySnapshot = await getDocs(q);
          if (querySnapshot.empty) {
            // L'utilisateur n'a pas été trouvé
            alert("L'utilisateur n'existe pas");
          } else {
            // L'utilisateur a été trouvé, vérification du mot de passe
            const user = querySnapshot.docs[0].data();
            if (this.password, user.password) {
              // Mot de passe correct, connexion de l'utilisateur
              localStorage.setItem('isAuthenticated', true);
              localStorage.setItem('userId', user._id); // Remplacez userId par l'ID de l'utilisateur connecté
              this.isAuthenticated = true;
              this.userId = user._id;
              this.$router.push("/");
            } else {
              // Mot de passe incorrect
              alert('Mot de passe incorrect');
            }
          }
        } catch (error) {
          // Gérer les erreurs lors de la connexion de l'utilisateur
          console.error("Erreur lors de la recherche de l'utilisateur : ", error);
        } finally {
          this.loading = false;
        }
      },
    },
  };
  </script>
  <style scoped>
 .auth-container {
    max-width: 600px;
    margin-top: 20vh!important;
    margin: auto;
    padding: 20px;
    /* border: 1px solid #ccc; */
    /* border-radius: 8px; */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  
  h2 {
    text-align: center;
    color: rgb(16, 91, 128);
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    text-align: left;
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 10px 0;
    border: 1px solid #ccc;
    /* border-radius: 4px; */
  }
  
  button {
    width: 50%;
    padding: 10px;
    background-color: rgb(16, 91, 128);
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #218838;
  }
  @media (max-width: 600px) {
  .auth-container {
    padding: 10px;
  }

  h2 {
    font-size: 1.5em;
  }
}
  </style>