const timeElement = document.querySelector('[data-testid="test-user-time"]');
        function updateTime() {
            timeElement.textContent = Date.now();
        }
        
        updateTime();
        setInterval(updateTime, 1000);

        const navLinks = {
            home: document.getElementById('nav-home'),
            contact: document.getElementById('nav-contact'),
            about: document.getElementById('nav-about')
        };

        const form = document.getElementById('contact-form');
        const successMessage = document.querySelector('[data-testid="test-contact-success"]');

        const fields = {
            name: {
                element: document.getElementById('contact-name'),
                error: document.getElementById('error-name'),
                validate: (value) => {
                    if (!value.trim()) {
                        return 'Name is required';
                    }
                    return '';
                }
            },
            email: {
                element: document.getElementById('contact-email'),
                error: document.getElementById('error-email'),
                validate: (value) => {
                    if (!value.trim()) {
                        return 'Email is required';
                    }
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(value)) {
                        return 'Please enter a valid email address';
                    }
                    return '';
                }
            },
            subject: {
                element: document.getElementById('contact-subject'),
                error: document.getElementById('error-subject'),
                validate: (value) => {
                    if (!value.trim()) {
                        return 'Subject is required';
                    }
                    return '';
                }
            },
            message: {
                element: document.getElementById('contact-message'),
                error: document.getElementById('error-message'),
                validate: (value) => {
                    if (!value.trim()) {
                        return 'Message is required';
                    }
                    if (value.trim().length < 10) {
                        return 'Message must be at least 10 characters long';
                    }
                    return '';
                }
            }
        };

        function showError(field, message) {
            field.error.textContent = message;
            field.error.classList.add('show');
            field.element.classList.add('error');
        }

        function clearError(field) {
            field.error.textContent = '';
            field.error.classList.remove('show');
            field.element.classList.remove('error');
        }

        function validateField(fieldName) {
            const field = fields[fieldName];
            const value = field.element.value;
            const errorMessage = field.validate(value);

            if (errorMessage) {
                showError(field, errorMessage);
                return false;
            } else {
                clearError(field);
                return true;
            }
        }

        Object.keys(fields).forEach(fieldName => {
            fields[fieldName].element.addEventListener('blur', () => {
                validateField(fieldName);
            });

            fields[fieldName].element.addEventListener('input', () => {
                if (fields[fieldName].error.classList.contains('show')) {
                    validateField(fieldName);
                }
            });
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            successMessage.classList.remove('show');

            let isValid = true;
            Object.keys(fields).forEach(fieldName => {
                if (!validateField(fieldName)) {
                    isValid = false;
                }
            });

            if (isValid) {
                successMessage.classList.add('show');
                form.reset();
                Object.keys(fields).forEach(fieldName => {
                    clearError(fields[fieldName]);
                });
                
                
                successMessage.setAttribute('tabindex', '-1');
                successMessage.focus();
            } else {
                
                const firstErrorField = Object.keys(fields).find(fieldName => 
                    fields[fieldName].error.classList.contains('show')
                );
                if (firstErrorField) {
                    fields[firstErrorField].element.focus();
                }
            }
        });