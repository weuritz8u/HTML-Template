// script written by Shadowdara

const template_content = `<!-- script written by Shadowdara -->
<!-- MIT LICENSE -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Template</title>
</head>
<body>
    <div class="column">
        <aside>
            <p>Sidebar</p>
        </aside>
        <div class="aside"></div>
        <main>
            <div class="new_block">
                <h1>Main Text</h1>
            </div>
        </main>
    </div>
</body>
</html>`;

let theme_mode = 1
var mode = localStorage.getItem('mode')

document.getElementById('template').innerText = template_content

if (mode == 'dark') {
    theme_mode = 1
    switch_mode()
}

function switch_mode() {
    if (theme_mode == 1) {
        document.documentElement.style.setProperty("--box1-color", "rgb(30, 30, 30)");
        document.documentElement.style.setProperty("--box2-color", "rgb(47, 47, 47)");
        document.documentElement.style.setProperty("--bg-color", "black");
        document.documentElement.style.setProperty("--text-color", "white");
        document.documentElement.style.setProperty("--link-color", "rgb(255, 172, 116)");
        document.documentElement.style.setProperty("--linktransform-color", "rgb(255, 102, 0)");
        document.getElementById("toggle_mode").innerText = "Lightmode";
        theme_mode += 1
        localStorage.setItem('mode', 'dark');
    }
    else if (theme_mode == 2) {
        document.documentElement.style.removeProperty("--box1-color");
        document.documentElement.style.removeProperty("--box2-color");
        document.documentElement.style.removeProperty("--bg-color");
        document.documentElement.style.removeProperty("--text-color");
        document.documentElement.style.removeProperty("--link-color");
        document.documentElement.style.removeProperty("--linktransform-color");
        document.getElementById("toggle_mode").innerText = "Darkmode";
        theme_mode = 1
        localStorage.setItem('mode', 'light');
    }
}
