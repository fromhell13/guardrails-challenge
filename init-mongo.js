db.createUser({
    user: 'guardrails',
    pwd: 'guardrails@2019',
    roles: [
        {
            role: 'readWrite',
            db: 'guardrailsdb'
        }
    ]
})