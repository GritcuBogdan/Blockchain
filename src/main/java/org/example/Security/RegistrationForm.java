package org.example.Security;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;
import org.example.Entity.User;
import org.springframework.security.crypto.password.PasswordEncoder;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class RegistrationForm {

    String username;
    String password;
    String fullname;
    String email;
    String phone;

    public User toUser(PasswordEncoder passwordEncoder){
        return new User(username, passwordEncoder.encode(password),
                        fullname, email, phone);
    }
}
