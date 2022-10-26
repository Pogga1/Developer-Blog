const logoutBtn = async () => {
    const res = await fetch('/api/users/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (res.ok){
        document.location.replace('/');
    } else {
        alert(res.statusText);
    } 
}
document.querySelector('#logoutBtn').addEventListener('click', logoutBtn);