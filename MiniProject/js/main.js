showtask();
let taskinput = document.getElementById("taskinput");
let addbtn = document.getElementById("addbtn");

addbtn.addEventListener('click',function(){
    taskinputval = taskinput.value;
    if(taskinputval.trim()!= 0)
    {
        let webtask =localStorage.getItem("Localtask");
            if(webtask == null)
                {
                    taskarr = [];   
                }
            else
                {
                    taskarr = JSON.parse(webtask);
                }
        taskarr.push(taskinputval);
        localStorage.setItem("Localtask",JSON.stringify(taskarr));
        taskinput.value= '';
        showtask();
    }
    })
function showtask()
{
    let webtask =localStorage.getItem("Localtask");
    if(webtask == null)
    {
        taskarr = [];   
    }
    else
    {
        taskarr = JSON.parse(webtask);
    }
    let html = '';
    let addedtasklist = document.getElementById("addedtasklist");
    taskarr.forEach((item, index) => {
        html += `<tr>
        <th scope="row">${index+1}.</th>
        <td>${item}</td> 
        <td><button type="button" onclick="editTask(${index})" class="text-primary">Edit</button></td>
        <td><button type="button" onclick="deleteTask(${index})" class="text-danger">Delete</button></td>    
        </tr>`;
        
    });
    addedtasklist.innerHTML = html;    
}

function editTask(index)
{
    let saveindex = document.getElementById("saveindex");
    let addbtn = document.getElementById("addbtn");
    let savebtn = document.getElementById("savebtn");
    let webtask = localStorage.getItem("Localtask");
    saveindex.value = index;
    let taskarr = JSON.parse(webtask);
    taskinput.value = taskarr[index];
    addbtn.style.display = "none";
    savebtn.style.display = "block";                           
}
    let savebtn = document.getElementById("savebtn");
    savebtn.addEventListener('click',function(){
    let addbtn = document.getElementById("addbtn");
    let savebtn = document.getElementById("savebtn");
    let webtask = localStorage.getItem("Localtask");
    let taskarr = JSON.parse(webtask);
    let saveindex = document.getElementById("saveindex").value;
    taskarr[saveindex] = taskinput.value;
    savebtn.style.display = 'none';
    addbtn.style.display = 'block';
    localStorage.setItem("Localtask",JSON.stringify(taskarr));
    showtask(); 
    taskinput.value= '';
})

function deleteTask(index)
{
    let webtask = localStorage.getItem("Localtask");
    let taskarr = JSON.parse(webtask);
    taskarr.splice(index,1);
    localStorage.setItem("Localtask",JSON.stringify(taskarr));
    showtask();
    taskinput.value= '';
}

let clearButton = document.getElementById("clearButton");
clearButton.addEventListener('click',function(){
    let addbtn = document.getElementById("addbtn");
    let savebtn = document.getElementById("savebtn");
    let webtask = localStorage.getItem("Localtask");
    let taskarr = JSON.parse(webtask);
    if(webtask == null)
                {
                    taskarr = [];   
                }
            else
                {
                    taskarr = JSON.parse(webtask);
                    taskarr = [];
                } 
    addbtn.style.display = "block";
    savebtn.style.display = "none";
    localStorage.setItem("Localtask",JSON.stringify(taskarr));
    showtask();
    taskinput.value= '';
})
