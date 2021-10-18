const welcomeJoinButton = document.getElementById('welcomeJoinButton');
const joinButton = document.getElementById('joinButton');
const docsButton = document.getElementById('docsButton');
const protocolLink = document.getElementById('protocolLink');
welcomeJoinButton.onclick = () => {
    window.fbq('track', 'CompleteRegistration', {
        value: 1,
        currency: 'RUB',
    });
    window.open('https://alpha.eywa.fi');
};
joinButton.onclick = () => {
    window.fbq('track', 'CompleteRegistration', {
        value: 1,
        currency: 'RUB',
    });
    window.open('https://alpha.eywa.fi');
};
docsButton.onclick = () => {
    window.open('https://docs.eywa.fi/');
};
protocolLink.onclick = () => {
    window.open('https://protocol.eywa.fi/');
};
