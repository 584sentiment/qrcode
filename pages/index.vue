<template>
  <div class="erap">
    <div>{{ $t("about.title") }}</div>
    <el-button>{{ $t('button.confirm') }}</el-button>
    <el-select @change="changeLang" v-model="lang">
      <el-option
        v-for="item in langs"
        :key="item.val"
        :value="item.val"
        :label="item.text"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      langs: [
        {
          text: "简体中文",
          val: "zh",
        },
        {
          text: "English",
          val: "en",
        },
      ],
      lang: ''
    };
  },
  methods: {
    changeLang(locale) {
      console.log(locale);
      // const locale = this.$store.state.locale === 'en' ? 'zh' : 'en'
      if (this.$store.state.locales.indexOf(locale) !== -1) {
        this.$i18n.locale = locale;
        this.$store.commit("setLang", locale);
      }
    },
  },
};
</script>
