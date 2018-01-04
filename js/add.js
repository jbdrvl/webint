var div = document.getElementById('words');
var nb_word=0

	function addword(){
	var input = document.createElement("input");
    input.type = "text";
    input.align="center"
    input.name = "word"+nb_word;
    input.id  = "Word"+nb_word;
    input.placeholder="Word";
    input.required="";
    div.appendChild(input);
	}

	function addtranslation(){
	var input = document.createElement("input");
    input.type = "text";
    input.name = "translation"+nb_word;
    input.id  = "translation"+nb_word;
    input.align="center"
    input.placeholder="translation";
    input.required="";
    div.appendChild(input);
	}

	function addspace(){
		var blank = document.createElement("&nbsp");
		div.appendChild(blank);

	}

	function addback(){
		var input =document.createElement("br");
		div.appendChild(input);
	}

    function addField() {
    addback();
    addback();
    addword();
    addtranslation();
    
    nb_word++;
    }