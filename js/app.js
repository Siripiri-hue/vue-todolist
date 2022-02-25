const toDoList = new Vue ({
    el: "#todo-list",
    data: {
        // todo: true,
        //isDone: true,
        thingsToDo: [
            {
                text: "Prenotare vacanza",
                done: true,
            },
            {
                text: "Shopping",
                done: false,
            },
            {
                text: "Prenotare ristorante",
                done: false,
            },
            {
                text: "Prenotare SPA",
                done: true,
            },
        ]
    },
    methods: {
        deleteLine: function(index){
            this.thingsToDo.splice(index,1);
        }
    }
})