<template>
  <div>
    <h2>Liste des Etudiants</h2>
   <div class="table-responsive">
    <table class="permis-table">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Adresse</th>
          <th>Type de Permis</th>
          <th>Numéro</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="eleve in eleves" v-bind:key="eleve.id">
          <td>{{ eleve.username }}</td>
          <td>{{ eleve.email }}</td>
          <td>{{ eleve.type_permis }}</td>
          <td>{{ eleve.contact }}</td>
        </tr>
      </tbody>
    </table></div>
  </div>
</template>
<script>
import { firestore } from "@/config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default {
  name: "AddVehicle",

  data() {
    return {
      id: "",
      loading: false,
      userId: null,
      eleves: [],
      eleve: [],
    };
  },
  mounted() {
    try {
      // Récupérer les marques depuis la base de données Firestore
      getDocs(collection(firestore, 'USERS')).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const eleve = { _id: doc.id, ...doc.data() };
          this.eleves.push(eleve);
          console.log(this.eleves);
          
        });
      });
    } catch (error) {
      console.error("Erreur lors de la récupération des eleves :", error);
    }
  },
  methods: {
    
  },
};
</script>
<style scoped>
.table-responsive {
  overflow-x: auto;
}

.permis-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.permis-table th, .permis-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.permis-table th {
  background-color: #4CAF50;
  color: white;
}

.permis-table tr:hover {
  background-color: #f1f1f1;
}

@media (max-width: 600px) {
  .permis-table th, .permis-table td {
    padding: 8px;
    font-size: 14px;
  }
}
</style>
