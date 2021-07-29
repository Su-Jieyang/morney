<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad :value.sync="record.amount" @submit="saveRecord" ref="xxx" />
      <Tabs :data-source="recordTypeList" :value.sync="record.type" />
      <div class="notes">
        <FormItem
          field-name="备注"
          placeholder="在这里备注一下啦"
          :value.sync="record.notes"
        />
      </div>
      <Tags @update:value="record.tags = $event" />
    </Layout>
  </div>
</template>
<script lang='ts'>
import NumberPad from "@/components/Money/NumberPad.vue";
import FormItem from "@/components/Money/FormItem.vue";
import Tags from "@/components/Money/Tags.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { RecordItem, Tag } from "@/customExport";
import Tabs from "@/components/Tabs.vue";
import recordTypeList from "@/constants/recordTypeList";

@Component({
  components: { Tabs, Tags, FormItem, NumberPad },
})
export default class Money extends Vue {
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };
  get recordList() {
    return this.$store.state.recordList;
  }

  recordTypeList = recordTypeList;
  created() {
    this.$store.commit("fetchRecords");
  }
  saveRecord() {
    if (!this.record.tags || this.record.tags.length === 0) {
      return window.alert("请至少选择一个标签");
    }
    this.$store.commit("createRecord", this.record);
    if (this.$store.state.createRecordError === null) {
      window.alert("已保存");
      this.record.notes = "";
      (this.$refs.xxx as Vue & { output: string }).output = "0";
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes {
  padding: 12px 0;
}
</style>
