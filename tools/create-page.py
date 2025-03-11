import os
import sys

def create_page(name: str) -> None:
    name = name.lower()
    # create the requested folder
    os.makedirs(f"/things/{name}")

    html_template = open("/tools/template.html")
    with open(f"/things/{name}/index.html", "x") as index:
        content = html_template.read()
        # replace variable references with the actual variables
        content = content.format(page_name = name)
        index.write(content)
    
    js_template = open("/tools/template.js")
    with open(f"/things/{name}/{name}.js", "x") as scripts:
        content = js_template.read()
        scripts.write(content)

    with open("index.html", "r+") as main:
        content = main.read()
        list_end = content.index("</ul>") - 4
        # do not edit the ancient runes
        content = content[:list_end] + f"        <li><p><a href=\"/things/{name}/\">{name}</a></p></li>\n" + content[list_end:]
        # print(content)
        main.seek(0)
        main.write(content)

# sys.argv gets the command line arguments that were passed
# element 0 is the name of the script, so we need element 1.
page_name = sys.argv[1]
create_page(page_name)
