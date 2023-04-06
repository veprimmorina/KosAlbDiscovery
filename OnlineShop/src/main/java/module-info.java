module com.example.onlineshop {
    requires javafx.controls;
    requires javafx.fxml;

    requires org.kordamp.bootstrapfx.core;

    opens com.example.onlineshop to javafx.fxml;
    exports com.example.onlineshop;
}