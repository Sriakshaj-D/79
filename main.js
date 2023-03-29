Name_of_the_student_array=[];
function submit()
{
    /*
    var name1= document.getElementById("Name_of_the_student_1").value;
    var name2= document.getElementById("Name_of_the_student_2").value;
    var name3= document.getElementById("Name_of_the_student_3").value;
    var name4= document.getElementById("Name_of_the_student_4").value;
    name_of_the_student_array.push(name1);
    name_of_the_student_array.push(name2);
    name_of_the_student_array.push(name3);
    name_of_the_student_array.push(name4);
    console.log(name_of_the_student_array);
    document.getElementById("display_name").innerHTML=name_of_the_student_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
    */
   var display_student_array=[];
   for (var j=1; j<=4; j++)
   {
    var Name_of_the_student= document.getElementById("Name_of_the_student_"+j).value;
    console.log(Name_of_the_student);
    Name_of_the_student_array.push(Name_of_the_student);
   }
   console.log(Name_of_the_student_array);
   var length_of_name_of_student_array= Name_of_the_student_array.length;
   console.log(length_of_name_of_student_array);
   for (var k=0; k<length_of_name_of_student_array; k++)
   {
    display_student_array.push("<h4>Name="+Name_of_the_student_array[k]+"</h4>");
    console.log(display_student_array);
   }
   document.getElementById("display_name_with_commas").innerHTML=display_student_array;
   var remove_commas= display_student_array.join(" ");
   console.log(remove_commas);
   document.getElementById("display_name_without_commas").innerHTML=remove_commas;
   document.getElementById("submit_button").style.display="none";
   document.getElementById("sort_button").style.display="inline-block"
}

function sorting()
{
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    var display_student_array_sorting= [];
    var length_of_name_of_student_array= Name_of_the_student_array.length;
    for (var k=0; k<length_of_name_of_student_array; k++)
   {
    display_student_array_sorting.push("<h4>Name="+Name_of_the_student_array[k]+"</h4>");
    console.log(display_student_array_sorting);
   }
   var remove_commas= display_student_array_sorting.join(" ");
   console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}
