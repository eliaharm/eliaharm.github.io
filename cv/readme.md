```sh

pandoc --css=developer-cv-css.css -s -f markdown --toc --metadata pagetitle="Dev CV" --to=html5 developer-cv.md  -o index.html

pandoc --css=developer-cv-css.css -s -f markdown --toc --metadata pagetitle="Dev CV" --to=html5 architect-cv.md  -o architect-cv.html

pandoc --css=developer-cv-css.css -s -f markdown --toc --metadata pagetitle="Dev CV" --to=pdf --pdf-engine=xelatex architect-cv.md  -o architect-cv.pdf 

pandoc --css=developer-cv-css.css -s -f markdown --toc --metadata pagetitle="Dev CV" --to=docx developer-cv.md  -o index.docx

# to PDF install mictex and rsvg-convert
choco install mictex rsvg-convert

pandoc --css=developer-cv-css.css -s -f markdown --toc --metadata pagetitle="Dev CV" --to=pdf --pdf-engine=xelatex developer-cv.md  -o index.pdf


pandoc --css=styling.css -s -f markdown --toc --metadata pagetitle="Dev CV" --to=html5 README.md  -o index.html


pandoc --css=styling.css -s -f markdown --toc --metadata pagetitle="Dev CV" --to=pdf --pdf-engine=xelatex README.md  -o index.pdf

```
