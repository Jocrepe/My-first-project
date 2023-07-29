function Calctime(user_input_seconds)
{
    var seconds = user_input_seconds;
    var hours = user_input_seconds / 3600;
    var remaining_seconds1 = seconds % 3600;
    var minutes = remaining_seconds1 / 60;
    var remaining_seconds2 = remaining_seconds1 % 60;
    
    return [hours, minutes, remaining_seconds2];
}

function display(element, value)
{
    document.getElementById('title3').innerHTML = "You exercise for"
    document.getElementById(element).innerHTML = Math.floor(value[0]) + " Hours " + Math.floor(value[1]) + " minutes " + value[2] + " seconds";
}

function CalctimeProgram(value)
{
    display('resdisplay', Calctime(value));
}