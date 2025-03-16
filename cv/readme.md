```sh

pandoc --css=developer-cv-css.css -s -f markdown --toc --metadata pagetitle="Dev CV" --to=html5 developer-cv.md  -o index.html

pandoc --css=developer-cv-css.css -s -f markdown --toc --metadata pagetitle="Dev CV" --to=html5 architect-cv.md  -o architect-cv.html
pandoc --css=developer-cv-css.css -s -f markdown --toc --metadata pagetitle="Dev CV" --to=docx architect-cv.md  -o architect-cv.docx

pandoc --css=developer-cv-css.css -s -f markdown --toc --metadata pagetitle="Dev CV" --to=pdf --pdf-engine=xelatex architect-cv.md  -o architect-cv.pdf 

pandoc --css=developer-cv-css.css -s -f markdown --toc --metadata pagetitle="Dev CV" --to=docx developer-cv.md  -o index.docx

# to PDF install mictex and rsvg-convert
choco install mictex rsvg-convert

pandoc --css=developer-cv-css.css -s -f markdown --toc --metadata pagetitle="Dev CV" --to=pdf --pdf-engine=xelatex developer-cv.md  -o index.pdf


pandoc --css=styling.css -s -f markdown --toc --metadata pagetitle="Dev CV" --to=html5 README.md  -o index.html


pandoc --css=styling.css -s -f markdown --toc --metadata pagetitle="Dev CV" --to=pdf --pdf-engine=xelatex README.md  -o index.pdf

```

Let's address both the column proportions and page break issues with some additional CSS adjustments:

```css
/* Enhanced print styles */
@media print {
  body {
    padding: 0.5rem;
    font-size: 9pt; /* Slightly smaller font to fit more content */
    max-width: 100%;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    color-adjust: exact !important;
  }
  
  .cv-container {
    display: grid;
    grid-template-columns: 30% 70%; /* Maintain the same proportion as in HTML */
    gap: 1rem;
    print-color-adjust: exact;
  }
  
  /* Fix page break issues */
  .experience-item,
  .project-item,
  .education-item,
  .certification-item {
    break-inside: avoid !important;
    page-break-inside: avoid !important;
  }
  
  /* Prevent headings from being printed at the bottom of a page */
  h3, h4 {
    break-after: avoid !important;
    page-break-after: avoid !important;
  }
  
  /* Keep related content together */
  .header-container {
    break-after: avoid !important;
    page-break-after: avoid !important;
  }
  
  /* Ensure the header stays on first page */
  .profile-photo-container, h1, h2, .contact-info {
    break-after: avoid !important;
    page-break-after: avoid !important;
  }
  
  /* Adjust column padding for print */
  .left-column {
    background-color: var(--section-bg) !important;
    padding: 0.75rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px var(--shadow);
  }
  
  .experience-item,
  .project-item {
    padding: 0.75rem;
    background-color: var(--section-bg) !important;
    border-radius: 8px; 
    box-shadow: 0 4px 6px var(--shadow);
    margin-bottom: 1rem;
  }
  
  /* Add explicit page break control if needed */
  .right-column {
    page-break-before: auto !important;
  }
  
  /* Add optional class that you can add to force page breaks manually if needed */
  .page-break {
    page-break-before: always !important;
    break-before: page !important;
  }
}
```

These changes will:

1. Fix the column proportions to match your HTML layout by using percentages (30%/70%) instead of fixed widths
2. Prevent page breaks within important content blocks with stronger break-inside rules
3. Prevent headings from being printed at the bottom of pages
4. Keep related content together (like header elements)
5. Add an optional class (`page-break`) that you can manually add to any element where you want to force a page break

For very specific page break control, you can add the `page-break` class to any element in your markdown where you want to force a new page:

```markdown
<div class="page-break"></div>
```

You might want to insert this before major sections if they're breaking awkwardly across pages.

Additionally, if you're still having issues with specific browsers, you can use these browser-specific print settings:

1. Set your print margin to "Minimum" or "None" in the browser print dialog
2. Set the scale to "Fit to page width" for better proportions
3. In Chrome's print dialog, under "More settings", ensure "Scale" is set to "Default"

These combined adjustments should help maintain proper column proportions and improve page break behavior when printing.
