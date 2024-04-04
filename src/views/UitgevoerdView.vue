<template>
  <main>
  <div class="text_div">
  <h1>Uitgevoerde rapportages</h1>
  <div v-if="loading">
  Laden...
</div>
<div v-else>
  <ul>
    <li v-for="(item, index) in data.reports_performed" 
    :key="index" @click="showDetails(item)" id="firstLi">
  <strong>Type: {{ item.type }}</strong>
  <p>Location: {{ item.location }}</p>
  <p v-if="item.new_damage">New Damage: {{ item.new_damage }}</p>
  <p v-if="item.date">Date: {{ item.date }}</p>
  <p v-if="item.acute_action_required">Acute action: {{ item.acute_action_required }}</p>
  <p v-if="item.description">Description: {{ item.description }}</p>
  <p>Pictures: {{ item.pictures }}</p>
  <p v-if="item.type_of_maintenance">Type of maintenance: {{ item.type_of_maintenance }}</p>
  <p v-if="item.cost_indication">Cost indication: {{ item.cost_indication }}</p>
  <p v-if="item.type_of_installation">Type of installation: {{ item.type_of_installation }}</p>
  <p v-if="item.reported_faults">Reported faults: {{ item.reported_faults }}</p>
  <p v-if="item.test_procedure">Test procedure: {{ item.test_procedure }}</p>
  <p v-if="item.test_approved">Approved: {{ item.test_approved }}</p>
  <p v-if="item.comments">Comments: {{ item.comments }}</p>
  <p v-if="item.damage_type">Damage type: {{ item.damage_type }}</p>
  <p v-if="item.modifications">Modifications: {{ item.modifications }}</p>
<p v-if="item['performed by']">Performed by: {{ item['performed by'] }}</p>
<p v-if="item.description_modification">Description Modification: {{ item.description_modification }}</p>
<p v-if="item.action">Action: {{ item.action }}</p>

 
   </li>
  </ul>
</div>
</div>
</main>
</template>
<script>
export default {
  name: 'UitgevoerdView',
  data() {
  return {
    data: null,
    loading: true,
    error: null
  };
},
created() {
  fetch('https://raw.githubusercontent.com/LadyoftheCave/jsonFile/main/db.json')
  // fetch('https://my-json-server.typicode.com/LadyoftheCave/jsonFile')
    .then(response => response.json())
    .then(json => {
      this.data = json;
      this.loading = false;
    })
    .catch(error => {
      this.error = error;
      this.loading = false;
    });
},
methods: {
  showDetails(item) {
    let details = `Type: ${item.type}\n`;
    details += `Location: ${item.location}\n`;
    if (item.new_damage) details += `New Damage: ${item.new_damage}\n`;
    if (item.damage_type) details += `Damage Type: ${item.damage_type}\n`;
    if (item.date) details += `Date: ${item.date}\n`;
    if (item.acute_action_required) details += `Acute Action Required: ${item.acute_action_required}\n`;
    if (item.description) details += `Description: ${item.description}\n`;
    if (item.type_of_maintenance) details += `Type of maintenance: ${item.type_of_maintenance}\n`;
    if (item.cost_indication) details += `Cost Indication: ${item.cost_indication}\n`;
    if (item.type_of_installation) details += `Type of installation: ${item.type_of_installation}\n`;
    if (item.reported_faults) details += `Reported_faults: ${item.reported_faults}\n`;
    if (item.test_procedure) details += `Test_procedure: ${item.test_procedure}\n`;
    if (item.comments) details += `Comments: ${item.comments}\n`;
    if (item.modifications) details += `Modifications: ${item.modifications}\n`;
    if (item.action) details += `Action: ${item.action}\n`;
    
    
    
    
    if (item.pictures) details += `Pictures: ${item.pictures.join(', ')}\n`;
    alert(details);
  },
},
};

</script>
<style scoped>

#firstLi {
  background-color: #d8e4e3;
  padding: 1rem;
}

h1 {
margin-bottom: 1rem;
}

ul {
  padding: 0;
}

li {
margin-top: 1rem;
font-weight: 300;
list-style-type: none;
}

p {
  margin: 0;
}

</style>