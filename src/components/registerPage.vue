<template>
  <div class="auth-container">
    <h2>Inscription</h2>
    <form @submit.prevent="handleRegister">
      <div class="form-group">
        <label for="username">Nom d'utilisateur</label>
        <input type="text" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="date_naissance">Date de naissance</label>
        <input type="date" v-model="date_naissance" required />
      </div>
      <div class="form-group">
        <label for="contact">Telephone</label>
        <input type="text" v-model="contact" required />
      </div>
      <div class="form-group">
        <label for="username">Type de permis</label>
        <select name="" v-model="type_permis" id="">
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
        </select>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">S'inscrire</button>
      <p>Déjà un compte ? <router-link to="/auth">Connectez-vous</router-link></p>
    </form>
    <p><router-link style="color: rgba(0, 0, 0, 0.7); text-decoration: none; font-weight: bold; font-size: 20px;"
        to="/">Acceuil</router-link></p>
  </div>
</template>

<script>
import { uuid } from 'vue-uuid';
import { firestore } from '@/config/firebaseConfig';
import { setDoc, doc } from 'firebase/firestore';
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      contact: '',
      type_permis: '',
      date_naissance: '',
      // selectedImage2: null,
      // selectedImageURL2: null,
      loading: false,
      currentUserID: null
    };
  },
  methods: {
    async handleRegister() {
      this.loading = true;
      const user = {
        username: this.username,
        date_naissance: this.date_naissance,
        email: this.email,
        contact: this.contact,
        type_permis: this.type_permis,
        password: this.password,
        _id: uuid.v4(),
      };


      setDoc(doc(firestore, 'USERS', user._id), { ...user })
        .then(() => {
          this.$router.push("/auth");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
          alert('erreur lors du processus')
        })
        .finally(() => {
          this.loading = false;
        });

    },
  }
};
</script>

<style scoped>
.auth-container {
  max-width: 600px;
  margin-top: 5vh !important;
  margin: auto;
  padding: 20px;
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

input,
select {
  width: 100%;
  padding: 10px 0;
  outline: none;
  border: 1px solid #ccc;
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