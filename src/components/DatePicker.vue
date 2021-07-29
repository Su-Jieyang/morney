<template>
  <div>
    <a-date-picker :default-value="moment('2015-06-06', dateFormat)" disabled />
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    this.dateFormat = "YYYY-MM-DD";
    return {};
  },
  methods: {
    moment,
  },
};
</script>
