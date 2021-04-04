yarn run sequelize-auto \
-h 192.168.1.10  \
-d natuliv \
-u natuliv_user -x natuliv_user \
-p 3306  \
-e mysql \
-o "./src/models"

yarn run prettier --write src/models