export const TRANSLATIONS_PL = {
    navbar: {
        greeting: 'Cześć, ',
        submenu: {
            profile: 'Twój profil',
            logout: 'Wyloguj',
        },
    },

    sidebar: {
        team: 'Zespół',
        applications: 'Wnioski',
    },

    // VIEWS
    login: {
        notification: {
            title: 'Błąd',
            message: 'Ups! Wystąpił nieoczekiwany błąd. Spróbuj jeszcze raz.',
        },

        errors: {
            email: 'Wpisz email',
            password: 'Wpisz hasło',
        },

        content: {
            title: 'Logowanie do Emplocity',
            subtitle: 'Wpisz swoje dane poniżej.',
            inputs: {
                email: 'Twój e-mail',
                password: 'Hasło',
            },
            loginButton: 'Zaloguj',
            forgotPasswordLink: 'nie pamiętam hasła',
            policy: '©2001–2021 Wszelkie prawa zastrzeżone. Emplocity®.',
            policyLink: 'Polityka prywatności',
        },
    },

    manageUsers: {
        errors: {
            title: 'Błąd',
            message: 'Ups! Wystąpił nieoczekiwany błąd. Spróbuj jeszcze raz.',
        },

        content: {
            title: 'Lista użytkowników',
            button: 'Dodaj użytkownika',

            table: {
                username: 'Imię i nazwisko',
                email: 'Email',
                permissions: 'Uprawnienia',
            },
        },
    },

    adminEditUser: {
        errors: {
            title: 'Błąd',
            message: 'Ups! Wystąpił nieoczekiwany błąd. Spróbuj jeszcze raz.',
        },

        content: {
            title: 'Profil użytkownika',
        },
    },

    userProfile: {
        formEditUserInfo:
            'Te informacje ujawniane są tylko innym osobom, mającym dostęp do konta twojej firmy w platformie Emplocity.',
        formResetPasswordInfo:
            'Hasło musi składać się z 8 znaków, w tym z wielkiej i małej litery, cyfry i jednego znaku specjalnego (np: @, $, !, *, #, ?, &, %).',
    },

    pageNotFound: {
        title: 'Ups.. Strony nie znaleziono!',
        message: {
            span: 'Wygląda na to, że się zgubiłeś...',
            other: 'strona, której szukasz, jest niedostępna!',
        },
        goBackButton: 'Powrót',
        policy: '©2001–2021 Wszelkie prawa zastrzeżone. Emplocity®.',
        policyLink: 'Polityka prywatności',
    },

    // FORMS
    formAddUser: {
        errors: {
            getGroups: {
                title: 'Błąd',
                message: 'Ups! Wystąpił nieoczekiwany błąd. Nie udało sie pobrać listy uprawnień.',
            },
            addUser: {
                title: 'Błąd',
                message:
                    'Ups! Wystąpił nieoczekiwany błąd. Nie udało sie dodać nowego użytkownika.',
            },
        },

        notifications: {
            title: 'Sukces',
            message: 'Pomyślnie dodano nowego użytkownika.',
        },

        validations: {
            required: 'To pole jest wymagane',
            email: 'Wprowadź poprawny email',
            password:
                'Hasło musi składać się z 8 znaków, w tym z wielkiej i małej litery, cyfry i jednego znaku specjalnego',
            correctValue: 'Wprowadź poprawne dane',
        },

        title: 'Dodaj nowego użytkownika',

        inputs: {
            username: 'Nazwa użytkownika',
            email: 'Email',
            password: 'Hasło',
            firstName: 'Imię',
            lastName: 'Nazwisko',
            groups: {
                label: 'Uprawnienia',
                placeholder: 'Wybierz typ użytkownika',
            },
        },

        button: 'Dodaj',
    },

    formAdminEditUser: {
        errors: {
            getGroups: {
                title: 'Błąd',
                message: 'Ups! Wystąpił nieoczekiwany błąd. Nie udało sie pobrać listy uprawnień.',
            },
            editUser: {
                title: 'Błąd',
                message:
                    'Ups! Wystąpił nieoczekiwany błąd. Nie udało sie zmienić danych użytkownika.',
            },
        },

        notifications: {
            title: 'Sukces',
            message: 'Dane użytkownika zostały zmienione.',
        },

        validations: {
            correctValue: 'Wprowadź poprawne dane',
            email: 'Wprowadź poprawny email',
            password:
                'Hasło musi składać się z 8 znaków, w tym z wielkiej i małej litery, cyfry i jednego znaku specjalnego',
        },

        inputs: {
            username: 'Nazwa użytkownika',
            email: 'Email',
            password: 'Hasło',
            firstName: 'Imię',
            lastName: 'Nazwisko',
            groups: {
                label: 'Uprawnienia',
                placeholder: 'Wybierz typ użytkownika',
            },
        },

        goBackButton: 'Powrót',
        saveButton: 'Zapisz',
    },

    formEditUser: {
        errors: {
            getUserData: {
                title: 'Błąd',
                message:
                    'Ups! Wystąpił nieoczekiwany błąd. Nie udało sie pobrać danych użytkownika.',
            },
            editUser: {
                title: 'Błąd',
                message:
                    'Ups! Wystąpił nieoczekiwany błąd. Nie udało sie zmienić danych użytkownika.',
            },
        },

        notifications: {
            title: 'Sukces',
            message: 'Twoje dane zostały pomyślnie zmienone.',
        },

        validations: {
            correctValue: 'Wprowadź poprawne dane',
            email: 'Wprowadź poprawny email',
        },

        title: 'Twoje dane',

        inputs: {
            username: 'Nazwa użytkownika',
            email: 'Email',
            firstName: 'Imię',
            lastName: 'Nazwisko',
        },

        saveButton: 'Zapisz',
    },

    formResetPassword: {
        errors: {
            title: 'Błąd',
            message: 'Ups! Wystąpił nieoczekiwany błąd. Nie udało się zmienić hasła.',
        },

        notifications: {
            title: 'Sukces',
            message: 'Hasło zostało  pomyślnie zmienione.',
        },

        validations: {
            required: 'To pole jest wymagane',
            email: 'Wprowadź poprawny email',
            password:
                'Hasło musi składać się z 8 znaków, w tym z wielkiej i małej litery, cyfry i jednego znaku specjalnego',
            confirmedPassword: 'Hasła muszą być takie same.',
        },

        title: 'Zmiana hasła',

        inputs: {
            password: 'Nowe hasło',
            confirmedPassword: 'Potwierdź hasło',
        },

        button: 'Zaktualizuj',
    },
};
