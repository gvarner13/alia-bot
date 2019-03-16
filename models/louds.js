const { Sequelize } = require('sequelize');

const Louds = sequelize.define('louds', {
    message: {
        type: Sequelize.STRING,
        unique: true,
    },
    username: Sequelize.INTEGER,
    usage_count: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
    },
});

const Louds_Banned = sequelize.define('louds_banned', {
    message: {
        type: Sequelize.STRING,
        unique: true,
    },
    username: Sequelize.INTEGER,
});

module.exports = { Louds, Louds_Banned };
