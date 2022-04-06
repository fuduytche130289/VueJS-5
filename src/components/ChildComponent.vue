<template>
  <div>
    <h2>Child Component</h2>
    <div>
      <slot name="slot1">
        Vae, bromium! I'm Child Component! Slot 1
      </slot>

      <slot name="slot2"  :content="content" :showMess="showMess" :title="title">
        Vae, bromium! I'm Child Component! Slot 2
      </slot>

    </div>
  </div>
</template>

<script>
export default {
  name: "ChildComponent",
  data: function (){
    return{
      content:"Child content",
      title:"Child title",
      showMess: function (){
        alert('hihi');
      }
    }
  }
}
</script>

<style scoped>

</style>