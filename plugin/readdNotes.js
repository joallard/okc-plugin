_OKCP.readdNotes = function(){
    if ($('#note_string').text() === '') {
		$('#actions').append('<a class="UI-change-link" href="javascript:Profile.loadWindow(\'edit_notes\', 244); return false;">Add Note</a>');
    }
};