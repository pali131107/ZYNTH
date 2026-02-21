async function generateSecureHash() {
    const input = document.getElementById('userKey').value;
    if(!input) return alert("Please enter a key");

    // SHA-512 logic starts here
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-512', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    document.getElementById('output').innerHTML = `
        <div style="margin-top:20px; padding:10px; border:1px solid #00d2ff;">
            <p style="color: #00d2ff; word-break: break-all;">
                <strong>Secure Hash Generated:</strong><br>${hashHex}
            </p>
        </div>`;
}
