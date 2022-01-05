var htmloutput = marked.parse($('#markedsource').html());
	$('#mainitems').prepend(htmloutput);
	$('#mainitems').flowtype({
		fontRatio: 22
});


$('#guitarcase').click(function(){
    siiimpleToast.message('BTC Adr. Coppied:  bc1qkqpwd9fssgqdstyk909za23dpgm8t5qvq0ezjl', {
      container: 'body',
      position: 'top|center',
      margin: 15,
      delay: 0,
      duration: 3000,
    });
    if (navigator.clipboard.writeText) {
      navigator.clipboard.writeText( 'bc1qkqpwd9fssgqdstyk909za23dpgm8t5qvq0ezjl' );
    }
});