let addBtn=document.getElementById('addBtn');
addBtn.addEventListener('click',function(e){
    let addTxt=document.getElementById('addText');
    let notes=localStorage.getItem('notes');
    if(notes==null){
        notesObj=[];
    }else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";
    console.log(notesObj);
    showNotes();
})

function showNotes() {
    let notes=localStorage.getItem('notes');
    if(notes==null){
        notesObj=[];
    }else{
        notesObj=JSON.parse(notes);
    }
    let html="";
    notes.forEach(function(element,index) {
        html +=`
            <div class="my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note</h5>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary">Delete Note</a>
                </div>
            </div>`
    });
}