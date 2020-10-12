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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}








function showAttr() {
    var sidebar = document.getElementById('sidebarParent');
    sidebar.classList.add('-translate-y-full');
}

function hideAttr() {
    var sidebar = document.getElementById('sidebarParent');
    sidebar.classList.remove('-translate-y-full');
}