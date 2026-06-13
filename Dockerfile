FROM httpd:2.4-alpine

COPY index.html style.css left.js README.md /usr/local/apache2/htdocs/

ENTRYPOINT [ "httpd-foreground" ]


