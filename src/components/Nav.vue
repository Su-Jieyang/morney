<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected"
      ><Icon name="money" />记账</router-link
    >
    <router-link to="/labels" class="item" active-class="selected"
      ><Icon name="labels" />标签</router-link
    >
    <router-link to="/statistics" class="item" active-class="selected"
      ><Icon name="statistics" />统计</router-link
    >
  </nav>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
nav {
  @extend %outerShadow;
  display: flex;
  font-size: 12px;
  background: white;
  > .item {
    padding: 2px;
    width: 33.33333%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon {
      width: 32px;
      height: 32px;
    }
  }
  > .item.selected {
    color: #722ed1;
  }
}
</style>
