const yargs = require('yargs');
const taskFunc = require('./task');
// thêm 
yargs.command({
    command: "add",
    builder: {
        title: {
            type: "string",
            demandOption: true,
        },
        description: {
            type: "string",
            demandOption: true,
        },
    },
    handler: function (args) {
        taskFunc.addTask(args.title, args.description);
    },
});

//xóa
yargs.command({
    command: "remove",
    builder: {
        title: {
            type: "string",
            demandOption: true
        }
    },
    handler: function (args) {
        taskFunc.removeTask(args.title);
    }
});
// update
yargs.command({
    command: "update",
    builder: {
        title: {
            type: "string",
            demandOption: true
        },
        description: {
            type: "string",
            demandOption: true
        }
    },
    handler: function (args) {
        taskFunc.updateTask(args.title,args.description);
    }
});

// lấy list
yargs.command({
    command: "list",
    builder: {},
    handler: function () {
       taskFunc.listAllTasks();
    }
});

// lấy task details
yargs.command({
    command: "getDetails",
    builder: {
        title: {
            type: "string",
            demandOption: true
        }
    },
    handler: function (args) {
        console.log("getDetails", args);
    }
});

yargs.parse();