let theme_mode = 1

function switch_mode() {
    if (theme_mode == 1) {
        document.documentElement.style.setProperty("--box1-color", "rgb(30, 30, 30)");
        document.documentElement.style.setProperty("--box2-color", "rgb(47, 47, 47)");
        document.documentElement.style.setProperty("--bg-color", "black");
        document.documentElement.style.setProperty("--text-color", "white");
        theme_mode += 1
    }
    else if (theme_mode == 2) {
        document.documentElement.style.removeProperty("--box1-color");
        document.documentElement.style.removeProperty("--box2-color");
        document.documentElement.style.removeProperty("--bg-color");
        document.documentElement.style.removeProperty("--text-color");
        theme_mode = 1
    }
}
