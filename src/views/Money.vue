<template>
  <div>
    <Layout class-prefix="layout">
      <Tags />
      <Notes />
    </Layout>
  </div>
</template>

<script>
import Notes from "@/components/Money/Notes.vue";
import Tags from "@/components/Money/Tags.vue";
export default {
  name: "Money",
  components: { Tags, Notes },
};
</script>`

<style lang="scss" scoped>
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
