var div = document.getElementById('words');
    function addField() {
    div.innerHTML += '<input type="text" name="Word1" id="word1" placeholder="Word" required="" autofocus="" />'+'  '+
            '<input type="text" name="translation1" id="trans1" placeholder="translation" required="" autofocus="" />'+
            '<td><button type="button" onclick="addField()" >+</button></td>'+'<br>'+'<br>';
    }