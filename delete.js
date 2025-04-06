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
            <ul>
                <li><a>Sidebar</a></li>
            </ul>
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

document.getElementById('template').innerText = template_content

function f_copy_template() {

    navigator.clipboard.writeText(template_content).then(function() {
        console.log("Text copied succesfully!");
        document.getElementById("copy_template").innerText = "Template Copied!";
    })
    .catch(function(error) {
        console.error("Error while copying: ", error);
    });
}
