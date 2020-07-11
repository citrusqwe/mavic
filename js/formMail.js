$('#sendMail').on('click', () => {
    let email = $('#email').val().trim()
    let name = $('#name').val().trim()
    let message = $('#message').val().trim()

    if (email == '') {
        $('#errorMess').textContent = 'Enter email'
        return false
    } else if (name == '') {
        $('#errorMess').textContent = 'Enter name'
        return false
    } else if (message == '') {
        $('#errorMess').textContent = 'Enter message'
        return false
    }

    $('#errorMess').text('')


    $.ajax({
        url: 'ajax/mail.php',
        type: 'POST',
        cache: false,
        data: {
            'name': name,
        },
        data: {
            'email': email,
        },
        data: {
            'message': message,
        },
        dataType: 'html',
        beforeSend: function () {
            $('#sendMail').prop('disabled', true)
        },
        success: function (data) {
            if (!data) {
                alert('Errors')
            } else {
                $('#mailForm').trigger('reset')
            }
            $('#sendMail').prop('disabled', false)
        }
    })
})