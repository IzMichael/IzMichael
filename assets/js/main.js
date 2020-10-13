function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function pulseSocial() {
    var socialMenu = document.getElementById("socialMenuI")
    socialMenu.classList.add("pulse")
    await sleep(10000);
    socialMenu.classList.remove("pulse")
}

$(document).ready(function () {
    $('#bioInsert').load("/config/bio.txt");
});

$(document).ready(function () {
    $('#descInsert').load("/config/description.txt");
});

async function setPanelHome(oldPanel) {
    var sidebar = document.getElementById('sidebarParent');
    var attributionPanel = document.getElementById('attributionPanel');
    var linksPanel = document.getElementById('linksPanel');
    sidebar.classList.remove('-translate-y-full');
    await sleep(1000);
    attributionPanel.classList.add('hidden');
    linksPanel.classList.add('hidden');
    console.log("Hidden Panel");
}

async function setPanelAttr() {
    var sidebar = document.getElementById('sidebarParent');
    var attributionPanel = document.getElementById('attributionPanel');
    attributionPanel.classList.remove('hidden');
    await sleep(10);
    sidebar.classList.add('-translate-y-full');
    console.log("Showing Attr Panel");
}

async function setPanelLinks() {
    var sidebar = document.getElementById('sidebarParent');
    var linksPanel = document.getElementById('linksPanel');
    linksPanel.classList.remove('hidden');
    await sleep(10);
    sidebar.classList.add('-translate-y-full');
    console.log("Showing Links Panel");
}