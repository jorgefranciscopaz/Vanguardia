const getNuevo = (req, res) => {
    try {
        res.send('Nuevo helado');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
    }
}

const getMain = (req, res) => {
    try {
        const main = req.params.main;
        res.send(`Helado principal: ${main}`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
    }
}

module.exports = {
    getNuevo,
    getMain
};