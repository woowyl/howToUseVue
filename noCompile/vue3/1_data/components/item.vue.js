const { defineComponent } = Vue;

export const item_component = defineComponent({
  name: 'ListItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  setup(props, { emit }) {
    const removeList = (item) => {
      // 触发事件
      emit('removeList', item);
    }

    return {
      removeList
    }
  },
  template: `
        <li>
        {{ item.name }}
        <button @click="removeList(item)">删除</button>
      </li>`
});