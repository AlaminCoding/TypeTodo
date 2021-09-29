<template>
  <div class="todo-wrapper">
    <h2 class="heading exist" v-if="exist">
      TODO ALREADY EXIST
    </h2>
    <h2 class="heading" v-if="!todos.length">Add Some TODO</h2>
    <b-list-group v-else>
      <b-list-group-item
        class="todo-items"
        v-for="(todo, index) in todos"
        :key="todo"
      >
        {{ todo }}
        <b-icon-trash @click="remove(index)" />
      </b-list-group-item>
    </b-list-group>
    <b-input-group class="mt-3">
      <b-form-input v-model="todo" @keyup.enter="add"></b-form-input>
      <b-input-group-append>
        <b-button variant="info" @click="add">Add</b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Getter, Action } from "nuxt-property-decorator";
import { BIconTrash } from "bootstrap-vue";
import { namespaced, NS_TODOS } from "~/utils/store/namespace";
import { TODOS } from "~/utils/store/getter.names";
import { ADD_TODO, REMOVE_TODO } from "~/utils/store/action.names";
@Component({
  name: "Todo",
  components: {
    BIconTrash
  }
})
export default class Todo extends Vue {
  @Getter(namespaced(NS_TODOS, TODOS)) todos: any;
  @Action(namespaced(NS_TODOS, ADD_TODO)) addTodo: any;
  @Action(namespaced(NS_TODOS, REMOVE_TODO)) removeTodo: any;
  todo: String = "";
  exist: Boolean = false;

  add() {
    let oldTodos = this.todos.map((element: any) => element.toLowerCase());
    let newTodo = this.todo.toLowerCase();
    let todoExist = oldTodos.find((element: any) => element === newTodo);

    if (todoExist) {
      this.exist = true;
      setTimeout(() => {
        this.exist = false;
      }, 1800);
      this.todo = "";
    } else {
      this.addTodo(this.todo);
      this.todo = "";
    }
  }
  remove(index: any) {
    this.removeTodo(index);
  }
}
</script>

<style lang="scss" scoped>
.todo-wrapper {
  max-width: 500px;
  margin: 100px auto;
  padding: 10px;
  border: 1px solid rgb(128, 128, 128, 0.5);
  border-radius: 5px;
}
.form-control:focus,
.btn-info:focus {
  box-shadow: none;
}
.todo-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    cursor: pointer;
    transition: 0.2s;
  }
  svg:hover {
    color: crimson;
  }
}

.heading {
  font-size: 18px;
  text-transform: uppercase;
}

.exist {
  animation-name: existAnime;
  animation-duration: 2s;
}

@keyframes existAnime {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
