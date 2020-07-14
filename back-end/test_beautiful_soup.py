from bs4 import BeautifulSoup

title = "h"

validated_data = {"aboutDesc1": "<p class=\"text-black-50 mb-0\">asdasdas sdasd asdasda</p>",

                  "aboutDesc2": "<p class=\"mb-0 text-white-50\">asdasd asdasdasdsdad asdasdasd</p>",

                  "aboutDesc3": "<p class=\"mb-0 text-white-50\">ds asdas sad aadasdasd</p>",
                  "aboutText1": "<h4>lore,masd</h4>",
                  "aboutText2": "<h4 class=\"text-white\">as sadasd</h4>",
                  "aboutText3": "<h4 class=\"text-white\">sadsasdasa</h4>",
                  "address": "<div class=\"small text-black-50\">Bishkek</div>",
                  "brandText": "<a class=\"navbar-brand js-scroll-trigger\" href=\"#page-top\">It academy</a>",
                  "email": "<div class=\"small text-black-50\"><a href=\"#\">aaaaaaaaaaaaa@xyz.com</a></div>",
                  "homeDesc": "<h2 class=\"text-white-50 mx-auto mt-2 mb-5\">is future</h2>",
                  "homeText": "<h1 class=\"mx-auto my-0 text-uppercase\">programming</h1>",
                  "phone": "<div class=\"small text-black-50\">+9997123215</div>",
                  }

with open(fr'/usr/src/sites/{title}/index.html') as inf:
    txt = inf.read()
    soup = BeautifulSoup(txt, features="html.parser")

for key, value in validated_data.items():
    soup.find(id=key).string = value

# save the file again
with open(fr'/usr/src/sites/{title}/index.html', "w") as outf:
    outf.write(str(soup))
