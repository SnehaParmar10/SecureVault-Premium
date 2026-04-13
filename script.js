function encrypt() {
    const text = document.getElementById('input-text').value;
    const key = document.getElementById('secret-key').value;
    if (!key) return alert("Enter a secret key!");
    
    // Simple mock encryption (Base64 + salt)
    const encrypted = btoa(text + "|" + key);
    document.getElementById('input-text').value = encrypted;
}

function decrypt() {
    const text = document.getElementById('input-text').value;
    const key = document.getElementById('secret-key').value;
    
    try {
        const decoded = atob(text);
        const [original, originalKey] = decoded.split("|");
        if (key === originalKey) {
            document.getElementById('input-text').value = original;
        } else {
            alert("Invalid Key!");
        }
    } catch (e) {
        alert("Invalid format or key!");
    }
}
