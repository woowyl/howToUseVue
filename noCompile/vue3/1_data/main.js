const { createApp, ref } = Vue;
import { list_component } from './components/list.vue.js';
import { item_component } from './components/item.vue.js';
// 注册组件 

const app = createApp({
  setup() {
    // 使用 ref 创建响应式数据
    let name = ref();
    let list = ref([]);
    const addList = () => {
      // 添加数据
      list.value.push( {
        id:  new Date().getTime(),
        name: name.value
      });
      name.value = '';
    }
    const removeList = (item) => {
      // 删除数据
      const index = list.value.findIndex((i) => i.id === item.id);
      list.value.splice(index, 1);
    }
    return {
      name,
      list,
      addList,
      removeList
    }
  },
})
app.component('list-view', list_component);
app.component('list-item', item_component);

app.mount('#app');

