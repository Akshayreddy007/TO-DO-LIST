var form = $("#to-do-form");
form.on("submit",e=>{
    e.preventDefault();
    var item = $("#additem").val();
    item = item.trim();
    var cat = $("input[name=category]:checked").val();
    if(item.length == 0){
        alert("write something");
    }else{
        if(cat == ""){
            alert("please select category")
        }else{
            if(cat == "Business"){
                document.querySelector("#to-do-list").innerHTML+='<div class="to-do-item"><label><input type="checkbox"><span class="bubble business"></span></label><input type="text" class="to-do-content" readonly><div class="action"><button class="edit">Edit</button><button class="delete">Delete</button></div></div>';
                $(".to-do-content").attr("value",item);
            }else{
                document.querySelector("#to-do-list").innerHTML+='<div class="to-do-item"><label><input type="checkbox"><span class="bubble personal"></span></label><input type="text" class="to-do-content" readonly><div class="action"><button class="edit">Edit</button><button class="delete">Delete</button></div></div>';
                $(".to-do-content").attr("value",item);
            }
        }
    }
    var edit_tasks = $.find(".edit");
    for(var i=0; i<edit_tasks.length; i++){
        edit_tasks[i].onclick = function(){
            $(this).parent().siblings(".to-do-content").removeAttr("readonly");
            $(this).parent().siblings(".to-do-content").focus();
            $(this).parent().siblings(".to-do-content").on("blur",()=>{
                $(this).parent().siblings(".to-do-content").attr("readonly",true);
            });
        }
    }
    var delete_tasks = $.find(".delete");
    for(var i=0; i<delete_tasks.length; i++){
        delete_tasks[i].onclick = function(){
            $(this).closest(".to-do-item").fadeOut();
        }
    }
    var checked_tasks = $.find(".bubble");
    for(var i=0; i<checked_tasks.length; i++){
        checked_tasks[i].onclick = function(){
            if($(this).closest(".to-do-item").hasClass("done") == true){
                $(this).closest(".to-do-item").removeClass("done");
                $(this).parent().siblings(".action").children(".edit").attr("disabled",false);
            }else{
                $(this).closest(".to-do-item").addClass("done");
                $(this).parent().siblings(".action").children(".edit").attr("disabled",true);
            }
        }
    }
});

