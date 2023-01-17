var todoList = [];
var doingListDiv = document.querySelector(".doing .list");
var doneListDiv = document.querySelector(".done .list");
var doingNumDiv = document.querySelector(".doing .num");
var doneNumDiv = document.querySelector(".done .num");
var input = document.querySelector("#input");
var doingNum = 0;
var doneNum = 0;

// 新增事件
input.onkeydown = function(event){
	// 当按下回车键时候，获取输入框内容，并且生成未完成列表
	if (event.key == "Enter") {
		console.log(event);
		// 获取输入框内容
		var value = input.value;
		var objItem = {
			content:value,
			isDone:false
		}
		todoList.push(objItem);
		// console.log(todoList);
		render(todoList);
		input.value = "";
	}
}

// 渲染函数 (?)
function render(todoList){
	// 每一次渲染之前清空内容
	doingListDiv.innerHTML = "";
	doneListDiv.innerHTML = "";
	doingNumDiv.innerHTML = "0";
	doneNumDiv.innerHTML = "0";
	doneNum = 0;
	doingNum = 0;
	// forEach循环遍历todoList数组生成todoItem
	todoList.forEach(function(item,index){
		var todoItem = document.createElement("div");

		todoItem.className = "todoItem";
		if (item.isDone) {
			todoItem.innerHTML = `
			<input type="checkbox" checked="checked" data-index="${index}" name="" id="">
			<div class="content">`+item.content+`</div>
			<div class="del" data-index="${index}">Del</div>`
			doneListDiv.appendChild(todoItem);//加入元素
			doneNum++;
			doneNumDiv.innerHTML = doneNum;
		}else{
			todoItem.innerHTML = `
			<input type="checkbox" data-index="${index}" name="" id="">
			<div class="content">`+item.content+`</div>
			<div class="del" data-index="${index}">Del</div>`
			doingListDiv.appendChild(todoItem);
			doingNum++;
			doingNumDiv.innerHTML = doingNum;
		}
	})
	
}

// init
render(todoList);

//如果有Todo完成了
doingListDiv.onchange = function(e){
	console.log(e);
	// 注意！！这里的index如果换成listid不能采用驼峰命名法，不然会undifined
	var index = parseInt(e.target.dataset.index);
	todoList[index].isDone = true;
	render(todoList);
}

// 如果有Todo要复原
doneListDiv.onchange = function(e){
	console.log(e);
	var index = parseInt(e.target.dataset.index);
	todoList[index].isDone = false;
	render(todoList);
}	

// 删除todoItem
doingListDiv.onclick = function(e){
	if (e.target.className == "del") {
		console.log(e);
		var index = parseInt(e.target.dataset.index);
		todoList.splice(index,1);
		render(todoList);
	}
}
doneListDiv.onclick = function(e){
	if (e.target.className == "del") {
		console.log(e);
		var index = parseInt(e.target.dataset.index);
		todoList.splice(index,1);
		render(todoList);
	}
}