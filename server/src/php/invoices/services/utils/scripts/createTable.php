

<?php
    include_once 'utils/utils.php';

    $conn = getConn();
    
    
    
    //mysqli_query($conn, "drop table orders"); 
    
    mysqli_query($conn, "CREATE TABLE orders(id INT NOT NULL AUTO_INCREMENT, firstName VARCHAR(50),  lastName VARCHAR(50), quantity INT, address VARCHAR(50),phone VARCHAR(50),email VARCHAR(50),company VARCHAR(50),deliveryMethod VARCHAR(10), instructions VARCHAR(255), PRIMARY KEY (id))");
     
?>

