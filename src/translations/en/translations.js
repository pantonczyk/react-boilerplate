export const TRANSLATIONS_EN = {
    navbar: {
        greeting: 'Hello, ',
        submenu: {
            profile: 'Your profile',
            logout: 'Logout',
        },
    },

    sidebar: {
        team: 'Team',
        applications: 'Applications',
    },

    // VIEWS
    login: {
        notification: {
            title: 'Error',
            message: 'Oops! Something went wrong. Try again.',
        },

        errors: {
            email: 'Please, enter your e-mail',
            password: 'Please, enter your password',
        },

        content: {
            title: 'Sign in to Emplocity',
            subtitle: 'Enter your credentials.',
            inputs: {
                email: 'Your e-mail',
                password: 'Your password',
            },
            loginButton: 'Sign in',
            forgotPasswordLink: 'I forgot my password',
            policy: '©2001–2021 All rights reserved. Emplocity®.',
            policyLink: 'Privacy policy',
        },
    },

    manageUsers: {
        errors: {
            title: 'Error',
            message: 'Oops! Something went wrong. Try again.',
        },

        content: {
            title: 'User list',
            button: 'Add user',

            table: {
                username: 'First and last name',
                email: 'Email',
                permissions: 'Permissions',
            },
        },
    },

    adminEditUser: {
        errors: {
            title: 'Error',
            message: 'Oops! Something went wrong. Try again.',
        },

        content: {
            title: 'Profile of user',
        },
    },

    userProfile: {
        formEditUserInfo:
            'This information is disclosed only to other people who have access to your company account on the Emplocity platform.',
        formResetPasswordInfo:
            'The password must be 8 characters long, including uppercase and lowercase letters, a number and one special character (e.g. @, $,!, *, #,?, &, %).',
    },

    pageNotFound: {
        title: 'Oops.. Page not found!',
        message: {
            span: 'It looks, that you are lost...',
            other: 'page, you are looking for, is not available!',
        },
        goBackButton: 'Go back',
        policy: '©2001–2021 All rights reserved. Emplocity®.',
        policyLink: 'Privacy policy',
    },

    // FORMS
    formAddUser: {
        errors: {
            getGroups: {
                title: 'Error',
                message: 'Oops! Something went wrong. Failed to retrieve a list of permissions.',
            },
            addUser: {
                title: 'Error',
                message: 'Oops! Something went wrong. Failed to create new user.',
            },
        },

        notifications: {
            title: 'Success',
            message: 'User created successfully.',
        },

        validations: {
            required: 'This field is required',
            email: 'Enter correct email',
            password:
                'Password must contain 8 characters, including one capital and one lowercase letter, number and special character',
            correctValue: 'Enter correct data',
        },

        title: 'Create new user',

        inputs: {
            username: 'Username',
            email: 'Email',
            password: 'Password',
            firstName: 'First name',
            lastName: 'Last name',
            groups: {
                label: 'Permissions',
                placeholder: 'Select type of user',
            },
        },

        button: 'Add',
    },

    formAdminEditUser: {
        errors: {
            getGroups: {
                title: 'Error',
                message: 'Oops! Something went wrong. Failed to retrieve a list of permissions.',
            },
            editUser: {
                title: 'Error',
                message: 'Oops! Something went wrong. Failed to change user data.',
            },
        },

        notifications: {
            title: 'Success',
            message: 'User data change successfully.',
        },

        validations: {
            correctValue: 'Enter correct data.',
            email: 'Enter correct email',
            password:
                'Password must contain 8 characters, including one capital and one lowercase letter, number and special character',
        },

        inputs: {
            username: 'Username',
            email: 'Email',
            password: 'Password',
            firstName: 'First name',
            lastName: 'Last name',
            groups: {
                label: 'Permissions',
                placeholder: 'Select type of user',
            },
        },

        goBackButton: 'Go back',
        saveButton: 'Save',
    },

    formEditUser: {
        errors: {
            getUserData: {
                title: 'Error',
                message: 'Oops! Something went wrong. Failed to retrieve user data.',
            },
            editUser: {
                title: 'Error',
                message: 'Oops! Something went wrong. Failed to change user data.',
            },
        },

        notifications: {
            title: 'Success',
            message: 'Your details have been successfully changed.',
        },

        validations: {
            correctValue: 'Enter correct data.',
            email: 'Enter correct email',
        },

        title: 'Your data',

        inputs: {
            username: 'Username',
            email: 'Email',
            firstName: 'First name',
            lastName: 'Last name',
        },

        saveButton: 'Save',
    },

    formResetPassword: {
        errors: {
            title: 'Error',
            message: 'Oops! Something went wrong. Nie udało się zmienić hasła.',
        },

        notifications: {
            title: 'Success',
            message: 'Hasło zostało  pomyślnie zmienione.',
        },

        validations: {
            required: 'This field is required',
            email: 'Enter correct email',
            password:
                'Password must contain 8 characters, including one capital and one lowercase letter, number and special character',
            confirmedPassword: 'Passwords must be identical.',
        },

        title: 'Password change',

        inputs: {
            password: 'New password',
            confirmedPassword: 'Confirm password',
        },

        button: 'Update',
    },
};
