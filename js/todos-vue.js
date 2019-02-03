var app = new Vue ({
  el : '#todos',
  data: {
    message: '',
    todos : [
      { id: 0, desc: 'drink water' },
      { id: 1, desc: 'call 4 taxi' }
    ]
  },
  methods: {
    deleteItem: function (item) {
      this.todos.splice(this.todos.indexOf(item), 1)
    },

    addItem: function () {
      if (this.message !== '') {
        var newObject = {};
        newObject.id = this.todos[ this.todos.length - 1 ].id + 1;
        newObject.desc = this.message;
        this.todos.push(newObject);
      }
    }
  }
});