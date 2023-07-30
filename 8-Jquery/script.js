
document.addEventListener('DOMContentLoaded', function () {
    // Functionality 1
    document.getElementById('jsBtn1').addEventListener('click', function () {
        document.getElementById('textDiv1').textContent = 'Added Text with JavaScript';
    });
    $('#jqBtn1').on('click', function () {
        $('#textDiv1').text('Added Text with jQuery');
    });

    // Functionality 2
    document.getElementById('jsBtn2').addEventListener('click', function () {
        var textDiv = document.getElementById('textDiv2');
        textDiv.style.display = textDiv.style.display === 'none' ? 'block' : 'none';
    });
    $('#jqBtn2').on('click', function () {
        $('#textDiv2').toggle();
    });

    // Functionality 3
    document.getElementById('jsBtn3').addEventListener('click', function () {
        var div = document.getElementById('textDiv3');
        var newElement = document.createElement('p');
        newElement.innerHTML = 'Appended HTML with JavaScript';
        div.appendChild(newElement);
    });

    $('#jqBtn3').on('click', function () {
        $('#textDiv3').append('<p>Appended HTML with jQuery</p>');
    });

    // Functionality 4
    document.getElementById('jsBtn4').addEventListener('click', function () {
        document.getElementById('textDiv4').style.color = 'red';
    });
    $('#jqBtn4').on('click', function () {
        $('#textDiv4').css('color', 'red');
    });

    // Functionality 5
    document.getElementById('jsBtn5').addEventListener('click', function () {
        var div = document.getElementById('textDiv5');
        // div.style.transition = '0.5s'
        div.style.width = div.style.width === '100px' ? '200px' : '100px';
    });
    $('#jqBtn5').on('click', function () {
        $('#textDiv5').animate({ width: 'toggle' });
    });

    // Functionality 6
    document.getElementById('jsBtn6').addEventListener('click', function () {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => document.getElementById('textDiv6').textContent = JSON.stringify(data));
    });

    $('#jqBtn6').on('click', function () {
        $.getJSON('https://jsonplaceholder.typicode.com/posts/1', function (data) {
            $('#textDiv6').text(JSON.stringify(data));
        });
    });

    // Functionality 7
    document.getElementById('textDiv7').addEventListener('mouseover', function () {
        this.style.color = 'green';
    });
    $('#textDiv7').on('mouseover', function () {
        $(this).css('color', 'green');
    });

    // Functionality 8
    document.getElementById('jsBtn8').addEventListener('click', function () {
        document.getElementById('img8').src = 'https://via.placeholder.com/200';
    });
    $('#jqBtn8').on('click', function () {
        $('#img8').attr('src', 'https://via.placeholder.com/200');
    });

    // Functionality 9
    document.getElementById('jsBtn9').addEventListener('click', function () {
        document.getElementById('textDiv9').classList.add('newClass');
    });
    $('#jqBtn9').on('click', function () {
        $('#textDiv9').addClass('newClass');
    });

    // Functionality 10
    document.getElementById('jsBtn10').addEventListener('click', function () {
        var div = document.getElementById('textDiv10');
        div.parentNode.removeChild(div);
    });
    $('#jqBtn10').on('click', function () {
        $('#textDiv10').remove();
    });
});
