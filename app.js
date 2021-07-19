const tasks = [];
let command = "";
while(command!="quit")
{
    let command =
    prompt("Enter the command\n'new' to insert new task\n'delete' to delete specific task\n'list' to show all tasks\n'quit' to exit");
    if(command === "quit"){
        alert("Thankyou for TODOing");
        break;
    }
    else if(command === "new")
    {
        let insert = prompt("Enter Task to be insert");
        tasks.push(insert);
        alert(`${insert} Inserted`);
    }
    else if(command === "list")
    {
        let string = "";
        console.log("Displaying List");
        for(task of tasks)
        {
            let ind = tasks.indexOf(task) + 1
            string =  string + ind + ". "+ task + "\n";
        }
        alert(string);
    }
    else if(command === "delete")
    {
        alert("Delting Values be carefull");
        let del = prompt("Enter task to be deleted: ");
        let ind = tasks.indexOf(del);
        if(ind===-1)
            alert(`${del} Not found`);
        else{
            alert(`${del} deleted`);
            tasks.splice(ind,1);
        }
    }
    else
        alert(`Enter valid request "${command}" not recognized`);
}