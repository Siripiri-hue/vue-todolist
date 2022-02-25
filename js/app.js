const toDoList = new Vue ({
    el: "#vue-toDoList",
    data: {
        // todo: true,
        //isDone: true,
        newLine: "",

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
        deleteLine: function(index) 
        {
            this.thingsToDo.splice(index,1);
        },

        addLine: function(newText) 
        {
            const newObj = {
                text : newText,
                done: false,
            }
            
            this.thingsToDo.push(newObj);
            this.newLine = "";
        },
    },
})