var router = require('express').Router();
var controller = require('../../controllers');

module.exports = () => {
    router.route('/')
        .get(controller.contact.getAll)
        .post(controller.contact.addNew);

    router.route('/search')
        .get(controller.contact.search)
    router.route('/id/:contactId')
        .get(controller.contact.getById)
        .put(controller.contact.updateById)
        .delete(controller.contact.deleteById)


    return router
}

