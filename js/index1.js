const element = document.getElementById("list");
const listItems = element.getElementsByTagName("li");

const result = [];
result.push(listItems[0].textContent); 
result.push(listItems[listItems.length - 1].textContent);
result.push(listItems[1].textContent);
result.push(listItems[3].textContent);
result.push(listItems[2].textContent);

alert("Результат виводу: " + result.join(", "));