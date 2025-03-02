package org.example.UserManagementService.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.UserManagementService.Entity.Enums.CurrencyType;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private CurrencyType baseCurrency;
}
