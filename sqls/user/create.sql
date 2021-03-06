INSERT INTO users
            (login,
             name,
             email,
             crypted_password,
             salt,
             active,
             created_at,
             updated_at,
             external_identity,
             external_identity_provider,
             user_local,
             is_root,
             onboarded)
VALUES     ( ${login},
             ${username},
             ${email},
             ${cryptedPassword},
             ${salt},
             true,
             ${createdAt},
             ${updatedAt},
             ${username},
             ${extIdProvider},
             false,
             false,
             true )

RETURNING Id