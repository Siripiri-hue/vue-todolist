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
            // console.log(index);
            this.thingsToDo.splice(index,1);
        },

        addLine: function(newText) 
        {
            if(newText !== "")
            {
                const newObj = {
                    text : newText,
                    done: false,
                }
                
                this.thingsToDo.push(newObj);
                this.newLine = "";
            }
            else 
                alert("Hai inserito una voce vuota!");
        },

        strikeLine: function(bool, i) 
        {
            console.log(bool, i);
            this.thingsToDo[i].done = !bool;
            console.log(this.thingsToDo[i].done);
        },
    },
})