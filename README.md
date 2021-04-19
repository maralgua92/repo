# repo

node moduliig uusgehdee terminal deeree npm i gej bichne uu


herwee ta mysql workbench deer database uusgeh gej baigaa bol daraah ashiglah zaawartai codeiig bichne uu 
bidenend nodelogin gesen database , accounts bolon post gesen 2 table heregtei


# Ашиглах заавар 1: If you use MySQL WorkBench:


   1.Node-modules: Open Terminal 

    npm install
      
   

   2.MySql open Database: table name -accounts-

    CREATE DATABASE IF NOT EXISTS `nodelogin` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
    USE `nodelogin`;

    CREATE TABLE IF NOT EXISTS `accounts` (
    `id` int(11) NOT NULL,
    `username` varchar(50) NOT NULL,
    `password` varchar(255) NOT NULL,
    `email` varchar(100) NOT NULL,
    `profilePicture` varchar(255)
    ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

    INSERT INTO `accounts` (`id`, `username`, `password`, `email` ,  `profilePicture`) VALUES (1, 'test', 'test', 'test@test.com',NULL);

    ALTER TABLE `accounts` ADD PRIMARY KEY (`id`);
    ALTER TABLE `accounts` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
    
    select*from accounts;

  2.MySql open Database: table name -post-

   CREATE DATABASE IF NOT EXISTS nodelogin DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci; USE nodelogin;

    CREATE TABLE IF NOT EXISTS `post` (
    `id` int(11) NOT NULL,
    `intro` varchar(250) NOT NULL,
    `text` varchar(500) NOT NULL,
    `profilePicture` varchar(255) NOT NULL
    ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

    ALTER TABLE `post` ADD PRIMARY KEY (`id`);
    ALTER TABLE `post` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
    
    select*from post;

  5.Create file: .env

    DB_HOST = ‘localhost’
    DB_USERNAME = 'root'
    DB_PASSWORD = 'root'//enter your password//
    DB_NAME = 'nodelogin'

    SERVER_PORT = 3000
 
    
 6.Open Terminal Start : 
  
    npm start
       
 7.Open browser: write

    localhost:3000
# Ашиглах заавар 2: If you use XAMPP : 
    XAMPP-ehelj asaana APACHE bolon MySQL 2iin Actions heseg deer START gej darsnaar server maani asah bolno
    uunii daraa browserluugee ochin  Localhost:80 gej bichne 
    ![2021-04-20](https://user-images.githubusercontent.com/80910812/115281118-3bb99700-a17b-11eb-8206-0f2aa116285c.png)
    ingej haragdah buguud phpmyadmin hesegruu orj database bolon tablee uusgene.
    Table-iin utguud АШИГЛАХ ЗААВАР 1: deer bii
    
    Thankyou using for myfiles.

   

