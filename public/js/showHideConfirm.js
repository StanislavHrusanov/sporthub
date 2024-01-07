function showHideConfirm() {
    const confirmModal = document.getElementsByClassName('confirm')[0];

    if (confirmModal.style.display == 'flex') {
        confirmModal.style.display = 'none';
    } else {
        confirmModal.style.display = 'flex';
    }
}