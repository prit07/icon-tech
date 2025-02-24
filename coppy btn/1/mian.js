$(document).ready(function() {
    $('.copyButton').click(function() {
        var copyText = $(this).find('.to-copy').text().trim();
        var textArea = $('<textarea></textarea>');
        textArea.val(copyText);
        $('body').append(textArea);
        textArea.select();
        document.execCommand('copy');
        textArea.remove();

        // Change button color
        $(this).addClass('copied');

        // Show pop-up message
        var popup = $(this).find('.popup');
        popup.show();
        var button = $(this);
        setTimeout(function() {
            button.removeClass('copied');
            popup.hide();
        }, 5000);
    });
});


