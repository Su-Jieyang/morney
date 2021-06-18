<template>
  <div>
    <Layout class-prefix="layout">
      <Tags />
      <Notes />
      <Types />
    </Layout>
  </div>
</template>

<script>
import Types from "@/components/Money/Types.vue";
import Notes from "@/components/Money/Notes.vue";
import Tags from "@/components/Money/Tags.vue";
export default {
  name: "Money",
  components: { Tags, Notes, Types },
};
</script>`

<style lang="scss" scoped>
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
