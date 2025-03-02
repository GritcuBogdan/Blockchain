package org.example.UserManagementService.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.UserManagementService.Entity.Enums.TokenTipe;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Token {

    @Id
    @GeneratedValue
    private Integer id;

    private String token;

    @Enumerated(EnumType.STRING)
    private TokenTipe tokenTipe;

    private boolean expired;
    private boolean revoked;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
