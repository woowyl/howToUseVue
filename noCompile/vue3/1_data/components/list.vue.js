const { defineComponent } = Vue;

export const list_component = defineComponent({
  name: 'ListView',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  setup(props, { emit }) {
    const removeList = (item) => {
      // 触发事件
      // emit('removeList', item);
      emit('removelist', item);
    };

    return {
      removeList
    }
  },
  template: `
        <ul>
          <list-item
            v-for="item in list"
            :key="item.id"
            :item="item"
            @removeList="removeList"
          />
        </ul>`
});