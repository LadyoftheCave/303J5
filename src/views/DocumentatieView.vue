<template>
    <main>
    <div class="text_div">
    <h1>Documentatie-pagina</h1>
    <p>{{ Norm }}</p>
    <p>{{ Test }}</p>
  </div>
</main>
</template>
<script>
export default {
    name: 'DocumentatieView',
    data() {
      return {
        Norm: "Normbladen",
        Test: "Testprocedures"
      }
    }


}
</script>
<style scoped>
p {
  border: none;
    background-color: #00a9a2;
    border-radius: 5px;
    block-size: 2rem;
    font-family: 'HvDTrial Brandon Grotesque', sans-serif;
    color: white;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: .1rem;
    height: 3rem;
    margin: 3px 0 1rem 0;
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
}

.text_div {
  width: 100%;
}

h1 {
  margin-bottom: 1rem;
}


</style>