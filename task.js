const fs = require('fs');

const addTask = function (title, description) {
    //get old task
    const tasks = getTasks();
    //kiem tra trung
    const foundTask = tasks.find((item) => item.title ===title);
    if(foundTask){
        console.log('Task da ton tai');
        return false;
    } //nếu task đã tồn tại ko add nữa
  
    //add task
    //tạo object chứa task được add
    const addedTask = {title, description};
    // thêm task được add vào mảng tasks lấy được
    tasks.push(addedTask);
    saveTask(tasks);

}

const removeTask = function(title){
    const tasks = getTasks();
    const index = tasks.findIndex((item) =>item.title ===title);
    if(index !==-1){
        tasks.splice(index,1);
        saveTask(tasks);
        console.log(`Da xoa thanh cong task ${title}`);
    }
    else console.log(`Task co title la ${title} khong ton tai`)

};

const updateTask = function(title, description){
    const tasks = getTasks();
    const index = tasks.findIndex((item) => item.title === title);
    if(index !== -1){
        tasks[index].description = description;
        console.log(tasks);
        saveTask(tasks);
        console.log(`Task ${title} da duoc cap nhat`);
    }else console.log(`Task ${title} khong ton tai`);
}

const listAllTasks = function(){
    const tasks = getTasks();
    tasks.forEach((item) => {
        console.log("title:", item.title);
        console.log("des:", item.description);    
        console.log("---------");
    });
}

const saveTask = function(tasks){
    // chuyển đổi mảng sau khi được add thành chuỗi JSON
    const tasksJSON = JSON.stringify(tasks);
    // write file chuỗi JSON
    fs.writeFileSync("tasks.json", tasksJSON);
}

const getTasks = function () {
    try {
         // dùng module fs của nodejs để đọc dữ liệu
        // buffer đọc được là một dãy số
        const taskBuffer = fs.readFileSync('tasks.json');
        // dùng hàm toString để chuyển buffer về chuỗi JSON
        const chuoiJSON = taskBuffer.toString();
        // // chuyển chuỗi JSON về lại object mới sd được
        return JSON.parse(chuoiJSON); 
       
    }catch(e){
        return [];
    }
}


module.exports = {
    addTask,
    removeTask,
    updateTask,
    listAllTasks
};