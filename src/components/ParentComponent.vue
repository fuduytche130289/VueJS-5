<template>
  <div>
    <ChildComponent>
      <template #slot1>
        I'm slot 1
      </template>

      <template #slot2="{content, title,showMess}">
        I'm slot 2
        {{content}}
        {{title}}
        <button @click="showMess()">Click me</button>
      </template>

    </ChildComponent>
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent";
export default {
  name: "ParentComponent",
  components:{
    ChildComponent
  },

}
</script>

<style scoped>

</style>