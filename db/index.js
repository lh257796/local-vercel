const Sequelize = require('sequelize');
const {UUID, UUIDV4, STRING, INTEGER, TEXT} = Sequelize
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/vercel-demo-db')

const Patient = conn.define('patient', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    name: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    age: {
        type: INTEGER,
    },
    HPI: {
        type: TEXT
    },
    hx: {
        type: TEXT
    }

})

const Provider = conn.define('provider', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    name: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    specialty: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    about: {
        type: TEXT
    }
})



module.exports = {
    conn,
    Patient,
    Provider
}
