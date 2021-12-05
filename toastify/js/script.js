$(document).ready(()=>{
    $.toast({
        text: 'Hello World!',
        heading: 'Aba ta success bhayo',
        icon: 'success',
        position: 'top-right',
        hideAfter: 5000,       
    })
});

$(document).ready(()=>{
    $.toast({
        text: 'Hello World!',
        heading: 'Aba ta error bhayo',
        icon: 'error',
        position: 'top-right',
        hideAfter: 10000,       
    })
});

$(document).ready(()=>{
    $.toast({
        text: 'Hello World!',
        heading: 'Aba ta warning bhayo',
        icon: 'warning',
        position: 'top-right',
        hideAfter: 15000,       
    })
});
