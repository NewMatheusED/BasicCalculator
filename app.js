    $('input[type=button]').mousedown(function() {
        $(this).css({'color': '#3498db', 'transform': 'scale(0.9)', 'box-shadow': 'inset 2px 2px 5px rgba(0, 0, 0, 0.5), inset -3px -3px 7px rgba(255, 255, 255, 0.05);' })
    })

    $('html').mouseup(function() {
        $('input[type=button]').css({'color': '#b3b3b3', 'transform': 'scale(1)', 'box-shadow': 'inset 2px 2px 5px rgba(0, 0, 0, 0.5), inset -3px -3px 7px rgba(255, 255, 255, 0.05);'})
    })
 
    function setValue(currentValue) {
        form.display.value = form.display.value + currentValue  
    }

    function calc() {
        if(form.display.value === '') {
            alert("Digite sua conta antes")
        }else {
            form.display.value = eval(form.display.value)
        }
    }
    
    function cleanAll() {
        form.display.value = ''
    }

    function Delete() {
        form.display.value = form.display.value.substr(0, form.display.value.length - 1)
        
    }