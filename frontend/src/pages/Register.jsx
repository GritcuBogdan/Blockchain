import React, { useState } from 'react';
import { TextField, Button, Container, Typography, MenuItem, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';

const RegisterPage = () => {
    const theme = useTheme();
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        baseCurrency: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        let tempErrors = {};
        tempErrors.firstname = formData.firstname ? "" : "First Name is required";
        tempErrors.lastname = formData.lastname ? "" : "Last Name is required";
        tempErrors.email = formData.email ? "" : "Email is required";
        tempErrors.password = formData.password ? "" : "Password is required";
        tempErrors.baseCurrency = formData.baseCurrency ? "" : "Base Currency is required";
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form data:', formData);
            try {
                const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
                    firstname: formData.firstname,
                    lastname: formData.lastname,
                    email: formData.email,
                    password: formData.password,
                    baseCurrency: formData.baseCurrency
                });
                console.log('Registration successful:', response.data);
                // Clear the form fields
                setFormData({
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: '',
                    baseCurrency: ''
                });
            } catch (error) {
                console.error('Error during registration:', error);
            }
        }
    };

    return (
        <Container maxWidth="sm" sx={{ paddingBottom: theme.spacing(30), paddingTop: theme.spacing(10) }}>
            <Box
                sx={{
                    backgroundColor: theme.palette.background.paper,
                    padding: theme.spacing(3),
                    borderRadius: theme.shape.borderRadius,
                    boxShadow: theme.shadows[3]
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    Register
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="First Name"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                        error={!!errors.firstname}
                        helperText={errors.firstname}
                    />
                    <TextField
                        label="Last Name"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                        error={!!errors.lastname}
                        helperText={errors.lastname}
                    />
                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                        error={!!errors.email}
                        helperText={errors.email}
                    />
                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                        error={!!errors.password}
                        helperText={errors.password}
                    />
                    <TextField
                        label="Base Currency"
                        name="baseCurrency"
                        select
                        value={formData.baseCurrency}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                        error={!!errors.baseCurrency}
                        helperText={errors.baseCurrency}
                    >
                        <MenuItem value="USD">USD</MenuItem>
                        <MenuItem value="EUR">EUR</MenuItem>
                        <MenuItem value="GBP">GBP</MenuItem>
                        {/* Add more currencies as needed */}
                    </TextField>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ backgroundColor: 'black' }}
                    >
                        Register
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default RegisterPage;