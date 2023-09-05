<template>
  <div :class="fieldsProp || classConfigProp ? 'row' : 'main row'">
    <div
      v-if="getClassConfig"
      v-bind="getClassConfig"
    >
      <template
        v-for="(field, key) in components"
        :key="key"
      >
        <prototype
          v-if="field.provide"
          v-bind="field.attrs"
          :fieldsProp="field.provide.fields"
          :classConfigProp="field.provide.classConfig"
          :hooksProps="field.provide.hooks"
        />
        <component
          v-else-if="field.attrs && field.attrs.html"
          :is="field.is"
          v-on="field.listeners"
          v-bind="field.attrs"
          v-model="record[field.$key]"
        >
          {{ field.attrs.html }}
        </component>
        <component
          v-else
          :is="field.is"
          v-bind="field.attrs"
          v-on="field.listeners"
          v-model="record[field.$key]"
        >
          <div v-if="field.childrens">
            <template
              v-for="(fieldChildren, keyChildren) in field.childrens"
              :key="keyChildren"
            >
              <prototype
                v-bind="parseFieldAttrs(fieldChildren)"
                :fieldsProp="fieldChildren.fields"
                :classConfigProp="fieldChildren.classConfig"
                :hooksProps="fieldChildren.hooks"
              />
            </template>
          </div>
        </component>
      </template>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Form from 'src/prototype/contracts/Form'
import Hook from 'src/prototype/contracts/Hook'

export default defineComponent({
  name: 'prototype',
  inject: [
    'fields',
    'classConfig',
    'hooks'
  ],
  props: {
    fieldsProp: {
      type: Function,
      default: null
    },
    classConfigProp: {
      type: Function,
      default: null
    },
    hooksProps: {
      type: Function,
      default: null
    }
  },
  mixins: [ Form, Hook ],
  data: () => ({
    record: {},
    components: {}
  }),
  computed: {
    /**
     * @returns {*}
     */
    getComponents () {
      return this.fieldsProp ? this.fieldsProp() : this.fields()
    },
    getClassConfig () {
      return this.classConfigProp ? this.classConfigProp() : (this.classConfig() ? this.classConfig() : {})
    },
    getHooks () {
      return this.hooksProps ? this.hooksProps() : this.hooks()
    }
  },
  created () {
    Object.keys(this.getComponents).forEach((component) => {
      this.components[component] = this.renderField(this.getComponents[component])
    })
  }
})
</script>

<style
  lang="scss"
  scoped
>
.main {
  height: 100vh;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
}

</style>
