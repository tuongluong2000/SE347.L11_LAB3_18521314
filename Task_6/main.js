function mailsome1() {
    who = prompt("Enter recipient's email address: ", "antispammer@earthling.net");
    what = prompt("Endter your subjet: ", "none");
    if (confirm("Are you sure you want to mail " + who + " with the subject of " + what + "?") == true) {
        parent.location.href = 'mailto:' + who + '?subject=' + what + '';
    }
}