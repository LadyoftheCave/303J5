<template>
  <main>
      <div class="text_div">
          <h1>Toegewezen rapportages-pagina</h1>
          <div id="firstLi" @click="showDetails(report)" v-for="(report, index) in store.state.reports_performed" :key="index">
              <p><b>Type: {{ report.type }} </b></p>
              <p>Location: {{ report.location }}</p>
              <p v-if="report.new_damage">New Damage: {{ report.new_damage }}</p>
  <p v-if="report.date">Date: {{ report.date }}</p>
  <p v-if="report.acute_action_required">Acute action: {{ report.acute_action_required }}</p>
  <p v-if="report.description">Description: {{ report.description }}</p>
  <p>Pictures: {{ report.pictures }}</p>
  <p v-if="report.type_of_maintenance">Type of maintenance: {{ report.type_of_maintenance }}</p>
  <p v-if="report.cost_indication">Cost indication: {{ report.cost_indication }}</p>
  <p v-if="report.type_of_installation">Type of installation: {{ report.type_of_installation }}</p>
  <p v-if="report.reported_faults">Reported faults: {{ report.reported_faults }}</p>
  <p v-if="report.test_procedure">Test procedure: {{ report.test_procedure }}</p>
  <p v-if="report.test_approved">Approved: {{ report.test_approved }}</p>
  <p v-if="report.comments">Comments: {{ report.comments }}</p>
  <p v-if="report.damage_type">Damage type: {{ report.damage_type }}</p>
  <p v-if="report.modifications">Modifications: {{ report.modifications }}</p>
<p v-if="report['performed by']">Performed by: {{ report['performed by'] }}</p>
<p v-if="report.description_modification">Description Modification: {{ report.description_modification }}</p>
<p v-if="report.action">Action: {{ report.action }}</p>



          </div>
      </div>
  </main>
</template>

<script>
export default {
  name: 'UitgevoerdView',
  inject: ["store"],
  mounted() {
    console.log(this.store);
  },
  methods: {
  showDetails(report) {
    let details = `Type: ${report.type}\n`;
    details += `Location: ${report.location}\n`;
    if (report.new_damage) details += `New Damage: ${report.new_damage}\n`;
    if (report.damage_type) details += `Damage Type: ${report.damage_type}\n`;
    if (report.date) details += `Date: ${report.date}\n`;
    if (report.acute_action_required) details += `Acute Action Required: ${report.acute_action_required}\n`;
    if (report.description) details += `Description: ${report.description}\n`;
    if (report.type_of_maintenance) details += `Type of maintenance: ${report.type_of_maintenance}\n`;
    if (report.cost_indication) details += `Cost Indication: ${report.cost_indication}\n`;
    if (report.type_of_installation) details += `Type of installation: ${report.type_of_installation}\n`;
    if (report.reported_faults) details += `Reported_faults: ${report.reported_faults}\n`;
    if (report.test_procedure) details += `Test_procedure: ${report.test_procedure}\n`;
    if (report.comments) details += `Comments: ${report.comments}\n`;
    if (report.modifications) details += `Modifications: ${report.modifications}\n`;
    if (report.action) details += `Action: ${report.action}\n`;
    if (report.pictures) details += `Pictures: ${report.pictures.join(', ')}\n`;
    alert(details);
  },
},
}
</script>

<style scoped>
#firstLi {
  background-color: #d8e4e3;
  padding: 1rem;
  margin-top: 2rem;
}

p {
  margin: 0;
  font-weight: 300;
}

</style>