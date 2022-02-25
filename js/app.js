const toDoList = new Vue ({
    el: "#todo-list",
    data: {
        // todo: true,
        thingsToDo: [
            {
                text: "Prenotare vacanza",
                done: false,
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
                done: false,
            },
        ]
    }
})